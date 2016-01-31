

module.exports = function(grunt) {
	"use strict";

	var path = require('path');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-webpack');

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
				tasks:  ['express:www' ],
				options: {
					spawn: false
				}
			}
		},

		webpack: {
			static: {
				entry: './static/js/app.js',
				output: { path: path.join(__dirname, "/public"), filename: 'bundle.js' },
				watch: true,
				module: {
					loaders: [
						{
							test: /.js?$/,
							loader: 'babel-loader',
							exclude: /node_modules/,
							query: {
								presets: ['es2015', 'react']
							}
						}
					]
				}
			}
		}
	});

	grunt.registerTask("build", ["webpack"]);
	grunt.registerTask("start", ["build", "express", "watch"]);
};
