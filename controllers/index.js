"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	// var user = req.user || "Anonymous";
	// res.json({"logged-user": user});
	res.render("index.html");
});

module.exports = router;
