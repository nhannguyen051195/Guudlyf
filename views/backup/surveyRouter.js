'use strict';
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const surveyController = require('../controllers/surveyController');
const surveyModel = require('../models/surveyModel');


router.post('/upload', (req, res) => {
   console.log('Survey router');
   surveyModel.create({
      schoolname: req.body.schoolname,
      schoolclass: req.body.schoolclass,
      indoorTemperature: req.body.indoorTemperature,
      indoorFreshness: req.body.indoorFreshness,
      indoorMoisture: req.body.indoorMoisture,
      indoorSmell: req.body.indoorSmell,
      indoorCleanliness: req.body.indoorCleanliness,
      indoorLightning: req.body.indoorLightning,
      indoorAcoustic: req.body.inDoorAcoustic,
      indoorWork: req.body.indoorWork,
      description: req.body.description,
   });
});

module.exports = router;