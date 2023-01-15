const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');





const JWT_SECRET = 'Harryisagoodb$oy';

// Route 1: Create a user using: Post "/api/auth/".No login required
router.post('/createuser', [
  body('name', 'Enter valid name').isLength({ min: 3 }),
  body('email', 'Enter valid email').isEmail(),
  body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),

],
  async (req, res) => {
    let success =false;
    // If there are errors ,return Bad request and the erros

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try {

      let user = await User.findOne({ email: req.body.email })
      if (user) {
        return res.status(400).json({success, error: "sorry a user with this email already exists" })
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);

      console.log(authtoken)


      success = true
      res.json({success, authtoken })
    } catch (error) {
      console.error(error.message)
      res.status(500).send("some error occurred");
    }

  })


// Route 2: Authenticate a user using: Post "/api/auth/login".No login required
router.post('/login', [
  body('email', 'Enter valid email').isEmail(),
  body('password', 'password cannot be blank').exists(),


], async (req, res) => {
  let success =false;
  // If there are errors ,return Bad request and the erros

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email, password} = req.body;
  try {
    let user = await User.findOne({email})
    if (!user) {
      success = false
      return res.status(400).json({ success, error: "sorry  try to login with correct  credentials" })
    }
    const passwordCompare = await bcrypt.compare(password,user.password);
    if(!passwordCompare){
      success = false
      return res.status(400).json({success, error: "sorry  try to login with correct  credentials" })
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);



    success = true;
    res.json({success, authtoken })
  }  catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error");
  }
}
)


// Route 3: Get loggedin user details using Post "" Login required


router.post('/getuser',fetchuser, [
  body('email', 'Enter valid email').isEmail(),
  body('password', 'password cannot be blank').exists(),


], async (req, res) => {

try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user)
  
}  catch (error) {
  console.error(error.message)
  res.status(500).send("Internal server error");
}






})




module.exports = router