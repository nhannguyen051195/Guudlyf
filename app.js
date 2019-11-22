'use strict';
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(`mongodb://goodlife:Goodlife123456@ds031329.mlab.com:31329/goodlife`, { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully to MongoDB.');

}, err => {
    console.log('Connection to MongoDB failed :( ' + err);
});


const questionsList = require("./routes/questions")
const answers = require("./routes/answers")
const feedback = require("./routes/feedback")


app.get("/", questionsList)
app.use("/answer", answers)
app.use("/feedback", feedback)

app.set('views', './views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);

