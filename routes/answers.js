'use strict';
const express = require("express");
const router = express.Router();
const Answer = require("../models/answerModel")

router.post("/", async (req, res) => {
    try {
        var post = new Answer();
        post.schoolname = req.body.schoolname;
        post.schoolclass = req.body.schoolclass;
        post.questionId = req.body.questionId;
        post.question = req.body.question;
        post.answer = req.body.answer;
        post.answerId = req.body.answerId;
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
        const posts = await Answer.find()
        //res.json(posts)
        res.render("answers", {
            posts: JSON.stringify(posts)
        });

    }
    catch (err) {
        res.json({ message: err })

    }
})
module.exports = router;