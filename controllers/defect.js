"use strict";

var express = require('express');
var router = express.Router();

var Defect = require("../models/defect");

router.get('/all', function(req, res){
	Defect.findAll().then(function (defects) {
		res.json(defects);
	});
});


module.exports = router;
