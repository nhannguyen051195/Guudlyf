'use strict';
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const surveyController = require('../controllers/surveyController');
const Survey = require('../models/surveyModel');
const methodOverride = require('method-override');

router.get('/', (req, res) => {
   res.send('Router post');
});

module.exports = router;