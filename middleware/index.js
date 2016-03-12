(function() {
	'use strict';

	var express = require('express');

	var path = require('path');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var session = require('express-session');

	var nunjucks  = require('nunjucks');
	var passport = require('passport');

	module.exports = function (app) {
		// view engine setup
		app.set('views', path.join(__dirname, 'views'));
		app.set('view engine', 'nunjucks');

		nunjucks.configure('views', {
			autoescape: true,
			express   : app
		});

		// uncomment after placing your favicon in /public
		//app.use(favicon(__dirname + '/public/favicon.ico'));
		app.use(logger('dev'));
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(cookieParser());

		app.use(session({
		  secret: 'some secret',
			saveUninitialized: true
		}));

		app.use(passport.initialize());
		app.use(passport.session());

		app.use(require('flash')());

		app.use(function(req,res,next){
			res.locals.messages = [];
			var message;
			while (message = res.locals.flash.shift()) {
				res.locals.messages.push(message);
			}

			res.locals.user = req.user;

			next();
		});

		app.use(function(req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.header('Access-Control-Allow-Headers', 'Content-Type');
			next();
		});

	};
}());
