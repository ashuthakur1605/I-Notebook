const express = require('express')
const router = express.Router();


router.get('/', (res,rep)=>{

    rep.json([])
})

module.exports = router