'use strict';
require('dotenv').config();
const express = require("express");
const app = express();
const request = require('request');
const mongoose = require('mongoose');
const surveyRouter = require('./routes/surveyRouter');
const surveyModel = require('./models/surveyModel');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;
var cors = require('cors')


const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(cors())

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

//mongodb://<dbuser>:<dbpassword>@ds031329.mlab.com:31329/goodlife


// Connect to MongoDB-------------------------------------------------------------------------------------------------------------------------------------------------
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/admin`, { useNewUrlParser: true }).then(() => {
//mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASSWORD}@${process.env.MLAB_HOST}:${process.env.MLAB_PORT}/goodlife`, { useNewUrlParser: true }).then(() => {

    console.log('Connected successfully to MongoDB.');
    //https.createServer(options, app).listen(process.env.APP_PORT);            // Local https
    //app.listen(process.env.APP_PORT);
}, err => {
    console.log('Connection to MongoDB failed :( ' + err);
});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* app.get("/", function (req, res) {
    res.render("index");
}) */

app.post("/upload", function (req, res) {
    res.render("index");
    console.log('Creating Survey');
    surveyModel.create({
        schoolname: req.body.schoolname,
        /*
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
        */
    });
})


var data;
const questionsList = require("./routes/questions")
const answers = require("./routes/answers")


//app.get("/getData", questionsList)
app.get("/", questionsList)
app.use("/answer", answers)




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

