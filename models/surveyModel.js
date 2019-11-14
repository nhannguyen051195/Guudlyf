'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const surveySchema = new Schema({
    schoolname: {type: String, enum: ['Kaisaniemen ala-aste', 'Meritalo', 'Keinutien ala-aste', 'Myllypuron peruskoulu']},
    schoolclass: String,
    indoorTemperature: Number,
    indoorFreshness: Number,
    indoorMoisture: Number,
    indoorSmell: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorCleanliness: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorLightning: Number,
    inDoorAcoustic: Number,
    indoorWork: Number,
    description: [{body: String, date: Date}]
});

module.exports = mongoose.model('survey', surveySchema);