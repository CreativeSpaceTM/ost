"use strict";

var express = require('express');
var router = express.Router();

var Product = require("../models/product");

router.get('/all', function(req, res){
	Product.findAll().then(function (products) {
		res.json(products);
	});
});


module.exports = router;
