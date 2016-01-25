"strict mode";

var Sequelize = require('sequelize');

module.exports = new Sequelize('ost', 'root', 'aa', {
	host: 'localhost',
	dialect: 'mysql'
});
