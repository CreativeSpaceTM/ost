"strict mode";

var Sequelize = require('sequelize');
var db = require('../db');

module.exports = db.define('defect', {
	name: Sequelize.STRING,
}, {timestamps: false});
