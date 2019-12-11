'use strict';
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://guudlyf:guudlyf123@cluster0-wzmbn.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully to MongoDB.');
}, err => {
    console.log('Connection to MongoDB failed :( ' + err);
});

const questionsList = require("./routes/questions");
const answers = require("./routes/answers");
const feedback = require("./routes/feedback");
const manageQuestions = require("./routes/manageQuestions");

function redirectUnmatched(req, res) {
    res.redirect("http://helsinkigoodlife.herokuapp.com/");
}

app.get("/", questionsList);

// Middlewares
app.use("/answers", answers);
app.use("/feedback", feedback);
app.use(redirectUnmatched);

app.set('views', './views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);


