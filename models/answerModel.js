'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const answers = new Schema({
    schoolname: {type: String, enum: ['Kaisaniemen ala-aste', 'Meritalo', 'Keinutien ala-aste', 'Myllypuron peruskoulu']},
    schoolclass: String,
    chooseOption: String,
    answerId: String,
    answer: String,
    questionId: String,
    question: String,
    date: Date
});

module.exports = mongoose.model('Answer', answers);