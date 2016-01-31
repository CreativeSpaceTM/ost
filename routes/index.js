"use strict";

var express = require('express');
var path = require('path');

var api = require("./api");
var error = require("./error");

module.exports = function (app) {
	app.use('/static', express.static(path.join(__dirname, '../static')));
	app.use('/public', express.static(path.join(__dirname, '../public')));

	api(app);

	// app.get('*', function (request, response){
	// 	response.sendFile(path.join(__dirname, '../views/index.html'))
	// });

	error(app);
};
