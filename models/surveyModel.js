'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a survey schema and model
const surveySchema = new Schema({
    schoolname: {type: String, enum: ['Kaisaniemen ala-aste', 'Meritalo', 'Keinutien ala-aste', 'Myllypuron peruskoulu']},
    schoolclass: String,
    indoorTemperature: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorFreshness: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorMoisture: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorSmell: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorCleanliness: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorLightning: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    inDoorAcoustic: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    indoorWork: {type: Number, enum: ['0', '1', '2', '3', '4', '5']},
    description: String,
    date: Date
});

module.exports = mongoose.model('survey', surveySchema);