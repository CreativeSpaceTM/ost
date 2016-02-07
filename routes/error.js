"use strict";

module.exports = function (app) {

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// error handlers

	app.use(function(err, req, res) {
		res.status(err.status || 500).json({
			error: err
		});
	});
};
