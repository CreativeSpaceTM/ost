var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var User = require("../models/user");

passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	function(email, password, done) {
		User.findOne({
			where: {"email": email}
		}).then(function (user) {
			if (!user) {
				return done(null, false, { message: 'Incorrect username or password.' });
			}
			
			if (!bcrypt.compareSync(password, user.password)) {
				return done(null, false, { message: 'Incorrect username or password.' });
			}

			return done(null, user);
		})
		.catch(function (err) {
			throw err;
		})
	}
));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findOne({
		where: {
			id: id
		}
	}).then(function (user) {
		done(null, user);
	});
});

module.exports = passport
