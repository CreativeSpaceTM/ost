"use strict";

var express = require('express');
var router = express.Router();

var Stat = require("../models/stat");

router.post('/add', function(req, res){
		Stat.create(req.body).then(function () {
			res.json({status: "ok"});
		})
		.catch(function (err) {
			res.status(400).json({errors: err.errors});
		});
});


module.exports = router;
