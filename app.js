var express = require("express"),
    app = express();

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var cors = require('cors')

app.use(cors())

var $ = jQuery = require('jquery')(window);
//   bodyParser = require("body-parser"),
//  mongoose = require("mongoose"),
//   methodOverride = require("method-override");

app.set('views', './views');
app.set("view engine", "ejs");
const hostname = '127.0.0.1';
const port = 3000;
/* app.get("/", function (req, res) {
    res.render("index");
}) */
app.get("/", function (req, res) {
    res.render("page1");
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    xhr.setHeader('Authorization', "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5X2lkIjoiNWQ3ZjdhMWM1YWFjYTQ0YzI4ZTMyNDk0Iiwib3JnYW5pemF0aW9uX2lkIjoiNWJkMDZhMDgxYWQ1ODkxMjVmMzMxYmJlIiwidXNlcl9pZCI6IjVkN2Y3YTBlNWFhY2E0NjFiZWUzMjQ5MyIsImV4cGlyYXRpb25fZGF0ZSI6OTk5OTk5OTk5OTk5OX0.0zJYyx5RNW-6AXaM0Bafjr123Q7Lu3XpVPz4RDW0BEE");


    // Pass to next layer of middleware
    next();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

