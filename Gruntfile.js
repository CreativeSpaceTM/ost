module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');

	grunt.initConfig({
		express: {
			www: {
				options: {
					script: "bin/www"
				}
			},
		},




		watch: {
			frontend: {
				files: [
					"views/**/*.html",
					"static/**/*.*"
				],

				options: {
					livereload: true,
				},
			},

			express: {
				files:  [
					"controllers/**/*.js",
					"misc/**/*.js",
					"configs/**/*.js",
					"filters/**/*.js",
					"models/**/*.js",
					"middleware/**/*.js",
					"routes/**/*.js",
					"node_modules/formless/**/*.js",
					"bin/www",
					"Gruntfile.js",
					"app.js"
				],
				tasks:  [ 'express:www' ],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.registerTask("start", ["express", "watch"]);
	grunt.registerTask("initdb", ["exec:initDB"]);
};
