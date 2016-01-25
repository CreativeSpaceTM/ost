"use strict";

var api = require("./api");
var error = require("./error");

module.exports = function (app) {
	api(app);
	error(app);
}
