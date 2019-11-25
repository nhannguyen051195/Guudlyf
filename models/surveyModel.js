'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const surveySchema = new Schema({
    schoolname: {type: String, enum: ['Kaisaniemen ala-aste', 'Meritalo', 'Keinutien ala-aste', 'Myllypuron peruskoulu']},
    schoolclass: String,
    indoorTemperature: String,
    indoorFreshness: String,
    indoorMoisture: String,
    indoorSmell: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorCleanliness: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorLightning: String,
    inDoorAcoustic: String,
    indoorWork: String,
    description: {type: String, date: Date}
});

module.exports = mongoose.model('Survey', surveySchema);