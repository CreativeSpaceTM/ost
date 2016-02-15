"use strict";

var express = require('express');
var router = express.Router();

var Stat = require("../models/stat");

router.get('/all', function(req, res){
	Stat.findAll().then(function (products) {
		res.json(products);
	});
});


module.exports = router;
