"use strict";

var db = require('../db');
var Defect = require("../models/defect");
var Product = require("../models/product");

var fs = require('fs');
var path = require('path');

function csvToArray(csvData) {
	var result = [];

	var lines = csvData.split("\n");
	for (var f = 0; f < lines.length; f++) {
		var line = lines[f];

		result.push(line.split(","));
	}

	return result;
}

db.sync().then(function () {
	console.log("Importing ... ");
	fs.readFile(path.join(__dirname, "../models/csv/defects.csv"), 'utf8', function (err, data) {
		if (err) {
			throw err;
		}

		var defectsRaw = csvToArray(data);
		var defects = [];

		for (var f = 0; f < defectsRaw.length; f++) {
			var defect = defectsRaw[f];
			defects.push({name: defect[0].toLowerCase().trim()});
		}

		Defect.bulkCreate(defects).catch(function (err) {
			throw err;
		});
	});

	fs.readFile(path.join(__dirname, "../models/csv/products.csv"), 'utf8', function (err, data) {
		if (err) {
			throw err;
		}

		var productsRaw = csvToArray(data);
		var products = [];

		for (var f = 0; f < productsRaw.length; f++) {
			var product = productsRaw[f];
			if (product.length === 2){
				products.push({pn: product[0], name: product[1].toLowerCase().trim()});
			}
		}

		Product.bulkCreate(products).catch(function (err) {
			throw err;
		});
	});
});
