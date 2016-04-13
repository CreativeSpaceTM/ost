"strict mode";

var Sequelize = require('sequelize');
var db = require('../db');

module.exports = db.define('product', {
	project: Sequelize.STRING,
	leftName: Sequelize.STRING,
	leftPn: Sequelize.STRING,
	rightName: Sequelize.STRING,
	rightPn: Sequelize.STRING
}, {timestamps: false});
