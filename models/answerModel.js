'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const answers = new Schema({
    schoolname: {type: String, enum: ['Kaisaniemen ala-aste', 'Meritalo', 'Keinutien ala-aste', 'Myllypuron peruskoulu']},
    schoolclass: {
        type: "String",
    },
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