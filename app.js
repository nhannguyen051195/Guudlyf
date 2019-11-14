'use strict';
require('dotenv').config();
const express = require("express");
const app = express();
const request = require('request');
const mongoose = require('mongoose');
const surveyRouter = require('./routes/surveyRouter');
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



console.log(process.env);

// Connect to MongoDB-------------------------------------------------------------------------------------------------------------------------------------------------
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/admin`, { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully to MongoDB.');
    https.createServer(options, app).listen(process.env.APP_PORT);            // Local https
    //app.listen(process.env.APP_PORT);
}, err => {
    console.log('Connection to MongoDB failed :( ' + err);
});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/", function (req, res) {
    res.render("index");
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

app.listen(process.env.PORT || port)

