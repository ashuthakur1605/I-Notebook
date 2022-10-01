const express = require('express')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note')

// Route 1: Get all the notes using: get "/api/auth/fetchallnotes".No login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occurred");
    }
})

// Route 2: add the notes using: get "/api/auth/addnote".No login required
router.get('/addnote', fetchuser, [
    body('title', 'Enter valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {

        // If there are errors ,return Bad request and the erros
        const { title, description, tag } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const saveNote = await note.save()
        res.json(saveNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occurred");
    }
})





// Route 3: update the notes using: put "/api/note/updatenote".No login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        // If there are errors ,return Bad request and the erros
        const { title, description, tag } = req.body
        // Create a newNote object
        const newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag };

        // find the note to be updated and updated
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("not allowed") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")

        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })


    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occurred");
    }
})





// Route 4: delete the notes using: Delete "/api/note/deletenote".No login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // If there are errors ,return Bad request and the erros
        const { title, description, tag } = req.body;


        // find the note to be deleted and deleted it
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found ") }
        // Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")

        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note })


    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occurred");
    }
})

module.exports = router