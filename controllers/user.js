"use strict";

var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var passport = require('./passport');

var User = require("../models/user");

router.post('/register', function(req, res) {
	bcrypt.genSalt(function(err, salt)
	{
		bcrypt.hash(req.body.password, salt, function(err, hash)
		{
			if (err) {
				throw err;
			}

			User.create({
				username: req.body.username,
				name: req.body.name,
				password: hash
			}).then(function () {
				res.json({ status: 'ok' });
			}).catch(function (err) {
				res.status(400).json({ error: err });
			});
		});
	});
});

router.post('/login', function (req, res, next) {

	passport.authenticate('local', function(err, user, info) {
		if (err) {
			return next(err);
		}

		if (!user) {
			return res.status(400).json({error: info.message});
		}

		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}

			return res.json({status: "ok"});
		});

	})(req, res, next);

});

router.get('/logout', function(req, res){
	req.logout();
	res.json({status: "ok"});
});

router.get('/all', function(req, res){
	User.findAll().then(function (users) {
		res.json(users);
	});
});


module.exports = router;
