'use strict';
const express = require("express");
const router = express.Router();
const Post = require("../models/testModel");

router.post("/", async (req, res) => {
    try {
        console.log(req.body.choices);
        var post = new Post();
        post.questionId = req.body.questionId;
        post.question = req.body.question;
        for (var i in req.body.choices) {
            var choiceId = req.body.choices[i].choiceId;
            var choice = req.body.choices[i].choice;
            var icon = req.body.choices[i].icon;
            post.choices.push({ choice, choiceId, icon })
        }
        const savedPosts = await post.save()
        res.json(savedPosts)
    }
    catch (err) {
        res.json({ message: err })

    }
});

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
        res.render("index", {
            posts: JSON.stringify(posts)
        });

    }
    catch (err) {
        res.json({ message: err })

    }
})

router.get("/:postID", async (req, res) => {
    try {
        const posts = await Post.findById(req.params.postID)
        res.json(posts)
    }
    catch (err) {
        res.json({ message: err })

    }
});

router.delete("/:postID", async function (req, res) {
    //findByIdAndRemove
    try {
        const removedPosts = await Post.remove({ _id: req.params.postID })
        res.json(removedPosts)
    }
    catch (err) {
        res.json({ message: err })

    }
});


module.exports = router;