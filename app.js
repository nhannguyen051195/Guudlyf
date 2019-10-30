'use strict';
require('dotenv').config();
const express = require("express");
const app = express();
const request = require('request');
const mongoose = require('mongoose');

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
app.use(express.static("public"))
app.set('views', './views');
app.set("view engine", "ejs");
const hostname = '127.0.0.1';
const port = 3000;

console.log(process.env);

// Connect to MongoDB
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/admin`, { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully to database.');
    //https.createServer(options, app).listen(process.env.APP_PORT);            // Local https
    app.listen(process.env.APP_PORT);
}, err => {
    console.log('Connection to db failed :( ' + err);
});

app.get("/", function (req, res) {
    res.render("index");
})
var data;

app.get("/getData", function (req, res) {
    res.send(data);
})

var options = {
    url: 'https://api.feedbackly.com/v1/surveys',
    headers: {
        "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5X2lkIjoiNWQ3ZjdhMWM1YWFjYTQ0YzI4ZTMyNDk0Iiwib3JnYW5pemF0aW9uX2lkIjoiNWJkMDZhMDgxYWQ1ODkxMjVmMzMxYmJlIiwidXNlcl9pZCI6IjVkN2Y3YTBlNWFhY2E0NjFiZWUzMjQ5MyIsImV4cGlyYXRpb25fZGF0ZSI6OTk5OTk5OTk5OTk5OX0.0zJYyx5RNW-6AXaM0Bafjr123Q7Lu3XpVPz4RDW0BEE"
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
    }
}

request(options, callback);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

