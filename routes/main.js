var indexControllers = require('../controllers/index');

module.exports = function (app) {
	app.use('/', indexControllers);
}
