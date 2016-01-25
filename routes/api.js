var indexControllers = require('../controllers/index');
var authControllers = require('../controllers/auth');

module.exports = function (app) {
	app.use('/', indexControllers);
	app.use('/api/v1.0/user', authControllers);
}
