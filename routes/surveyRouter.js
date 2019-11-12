'use strict';
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const surveyController = require('../controllers/surveyController');
const methodOverride = require('method-override');
const surveyModel = require('../models/surveyModel');


router.post('/', (req, res) => {
   console.log('Survey router');
   surveyModel.create({
      schoolname: req.body.school,
      schoolclass: req.body.class,
      indoorTemperature: req.body.temp,
      indoorFreshness: req.body.fresh,
      indoorMoisture: req.body.moist,
      indoorSmell: req.body.smell,
      indoorCleanliness: req.body.clean,
      indoorLightning: req.body.light,
      indoorAcoustic: req.body.acoustic,
      indoorWork: req.body.work,
      description: req.body.comment
   });
});

module.exports = router;