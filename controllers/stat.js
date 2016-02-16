"use strict";

var express = require('express');
var router = express.Router();

var Stat = require("../models/stat");

router.post('/add', function(req, res){
		Stat.bulkCreate(req.body.stats).then(function (stats) {
			res.json({status: "ok", added:stats});
		})
		.catch(function (err) {
			res.status(400).json({error: err});
		});
});


module.exports = router;
