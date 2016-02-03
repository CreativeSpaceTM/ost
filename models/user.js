"strict mode";

var Sequelize = require('sequelize');
var db = require('../db');

module.exports = db.define('user', {
	username: {type: Sequelize.STRING, unique: true},
	name: Sequelize.STRING,
	type: {
		type: Sequelize.ENUM,
		values: ['su', 'op'],
		allowNull: false
	},
	password: Sequelize.STRING
});
