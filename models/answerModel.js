'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const answers = new Schema({
    answerId: {
        type: "String",
    },
    answer: {
        type: "String",
    },
    questionId: {
        type: "String",
    },
    question: {
        type: "String",
    },

    date: { type: Date },
});

module.exports = mongoose.model('Answer', answers);