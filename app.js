'use strict';
require('dotenv').config();
const express = require("express");
const app = express();
const request = require('request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const surveyRouter = require('./routes/surveyRouter');
const surveyModel = require('./models/surveyModel');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

// Import Routes
//const postsRoute = require('.routes/posts');
//app.use('/posts', postsRoute);

/* var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var cors = require('cors')

app.use(cors()) */

//var $ = jQuery = require('jquery')(window);
//   bodyParser = require("body-parser"),
//  mongoose = require("mongoose"),
//   methodOverride = require("method-override");
//app.use(express.static("public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

console.log(process.env);

// Connect to MongoDB-------------------------------------------------------------------------------------------------------------------------------------------------
// Connecting locally through MongoDB Compass
//mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/admin`, { useNewUrlParser: true }).then(() => {

// MongoDB.Atlas
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully to MongoDB.');
}, err => {
    console.log('Connection to MongoDB failed :( ' + err);
});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/", function (req, res) {
    res.render("index");
})

app.post("/upload", function (req, res) {
    res.render("index");
    console.log('Creating Survey');
    surveyModel.create({
        schoolname: req.body.schoolname,
        schoolclass: req.body.class,
        indoorTemperature: req.body.indoorTemperature,
        indoorFreshness: req.body.indoorFreshness,
        indoorMoisture: req.body.indoorMoisture,
        indoorSmell: req.body.indoorSmell,
        indoorCleanliness: req.body.indoorCleanliness,
        indoorLightning: req.body.indoorLightning,
        indoorAcoustic: req.body.indoorAcoustic,
        indoorWork: req.body.indoorWork,
        description: req.body.description,
        date: req.body.date
    });
})


var data;

app.get("/getData", function (req, res) {
    res.send(data);
})



function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
    }
}
var options = {
    url: 'https://api.feedbackly.com/v1/surveys',
    headers: {
        "Authorization": process.env.TOKEN
    }
};


request(options, callback);

// Middleware
app.set('views', './views');
app.set("view engine", "ejs");
app.use('/survey', surveyRouter);
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || port);

