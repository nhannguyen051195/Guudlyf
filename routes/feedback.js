'use strict';
const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedbackModel")

router.post("/", async (req, res) => {
    try {
        var post = new Feedback();
        post.feedback = req.body.feedback;
        post.date = new Date();
        const savedPosts = await post.save()
        res.json(savedPosts)
    }
    catch (err) {
        res.json({ message: err })

    }
})

router.get("/", async (req, res) => {
    try {
        const posts = await Feedback.find()
        res.json(posts)

    }
    catch (err) {
        res.json({ message: err })

    }
})
module.exports = router;