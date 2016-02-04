"strict mode";

var Sequelize = require('sequelize');
var db = require('../db');

module.exports = db.define('product', {
	pn: Sequelize.STRING,
	name: Sequelize.STRING
}, {timestamps: false});
