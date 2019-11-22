'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const questionSchema = new Schema({
    questionId: {
        type: "String",
    },
    question: {
        type: "String",
    },
    choices: [{
        choiceId: { type: "String" },
        choice: { type: "String" },
        icon: { type: "String" },

    }]


});

module.exports = mongoose.model('QuestionsAndAnswers', questionSchema);