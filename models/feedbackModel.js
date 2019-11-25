'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const feedbackSchema = new Schema({
    schoolname: {type: String, enum: ['Kaisaniemen ala-aste', 'Meritalo', 'Keinutien ala-aste', 'Myllypuron peruskoulu']},
    schoolclass: String,
    feedback: { type: "String" },
    date: { type: Date },
});

module.exports = mongoose.model('feedback', feedbackSchema);