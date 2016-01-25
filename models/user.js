"strict mode";

var Sequelize = require('sequelize');
var db = require('../db');

module.exports = db.define('user', {
	email: Sequelize.STRING,
	password: Sequelize.STRING
});
