"use strict";

var userControllers = require('../controllers/user');
var productControllers = require('../controllers/product');
var defectControllers = require('../controllers/defect');
var statControllers = require('../controllers/stat');

module.exports = function (app) {
	app.use('/api/v1.0/user', userControllers);
	app.use('/api/v1.0/product', productControllers);
	app.use('/api/v1.0/defect', defectControllers);
	app.use('/api/v1.0/stat', statControllers);
};
