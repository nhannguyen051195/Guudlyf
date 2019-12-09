'use strict';
const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedbackModel")

router.post("/", async (req, res) => {
    try {
        var post = new Feedback();
        post.schoolname = req.body.schoolname;
        post.schoolclass = req.body.schoolclass;
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
        res.render("manageQuestions", {
            posts: JSON.stringify(posts)
        });
    
    }
    catch (err) {
        res.json({ message: err })

    }
})
module.exports = router;