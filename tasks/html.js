/*
 * @title HTML
 * @description Minify and improve your HTML
 */

// Dependencies
const gulp = require('gulp');
const htmlMinify = require('gulp-html-minify');
const plumber = require('gulp-plumber');
const dotenv = require('dotenv');

// Config
dotenv.config()

// Consts
const HTML_SRC = process.env.HTML_SRC ? process.env.HTML_SRC : `${process.env.SRC}/**/*.html`;
const HTML_DEST = process.env.HTML_DEST ? process.env.HTML_DEST : process.env.DEST;

// Tasks
function compileHtml() {
	return gulp.src(HTML_SRC)
		.pipe(plumber())
		.pipe(htmlMinify())
		.pipe(plumber.stop())
		.pipe(gulp.dest(HTML_DEST));
}

exports.compileHtml = compileHtml;
exports.HTML_SRC = HTML_SRC;
exports.HTML_DEST = HTML_DEST;
