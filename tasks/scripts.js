/*
 * @title Scripts
 * @description A task to concatenate and compress js files via webpack
 */

// Dependencies
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config');
const named = require('vinyl-named');
const rename = require('gulp-rename');
const dotenv = require('dotenv');

// Config
dotenv.config();

// Consts 
const JS_SRC = process.env.JS_SRC ? process.env.JS_SRC : `${process.env.SRC}/**/*.js`;
const JS_DEST = process.env.JS_DEST ? process.env.JS_DEST : process.env.DEST;

// Tasks
function isFixed(file) {
    return file.eslint != null && file.eslint.fixed;
}

function lintScripts() {
	return gulp.src(JS_SRC, { base: './' })
        .pipe(eslint({fix:true}))
		.pipe(eslint.format())
		.pipe(gulpIf(isFixed, gulp.dest('./')));
}

function transpileScripts() {
	let tmp = {};

	return gulp.src([JS_SRC])
		.pipe(named())
		.pipe(rename(function (path) {
      		tmp[path.basename] = path;
    	}))   
    	.pipe(webpackStream(webpackConfig, webpack))
		.pipe(rename(function (path) {
      		path.dirname = tmp[path.basename].dirname;
    	}))
		.pipe(gulp.dest(JS_DEST));
}

exports.scripts = gulp.series(lintScripts, transpileScripts);
exports.JS_SRC = JS_SRC;
exports.JS_DEST = JS_DEST;
