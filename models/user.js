"strict mode";

var Sequelize = require('sequelize');
var db = require('../db');

module.exports = db.define('user', {
	username: {type: Sequelize.STRING, unique: true},
	name: Sequelize.STRING,
	password: Sequelize.STRING
});
