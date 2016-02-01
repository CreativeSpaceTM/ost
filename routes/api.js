"use strict";

var indexControllers = require('../controllers/index');
var userControllers = require('../controllers/user');

module.exports = function (app) {
	app.use('/', indexControllers);
	app.use('/api/v1.0/user', userControllers);
};
