"strict mode";

var Sequelize = require('sequelize');
var Defect = require("./defect");
var Product = require("./product");
var db = require('../db');

module.exports = db.define('stat', {
	product: {
		type: Sequelize.INTEGER,
		references: {
			model: Product,
			key: "id"
		}
	},
	side: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	status: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	defect: {
		type: Sequelize.INTEGER,
		allowNull: true,
		references: {
			model: Defect,
			key: "id"
		}
	}
});
