var express = require('express');

var app = express();

var middleware = require("./middleware");
var routes = require("./routes");

middleware(app);
routes(app);

module.exports = app;
