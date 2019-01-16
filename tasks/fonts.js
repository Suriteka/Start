/*
 * @title Fonts
 * @description Minify your fonts
 */

// Dependencies
const gulp = require('gulp');
const ttftowoff = require('gulp-ttf2woff');
const dotenv = require('dotenv');

// Config
dotenv.config();

// Consts
const FONT_SRC = process.env.FONT_SRC ? process.env.FONT_SRC : `${process.env.SRC}/**/*.{ttf,otf,woff,woff2}`;
const FONT_DEST = process.env.FONT_DEST ? process.env.FONT_DEST : process.env.DEST;

// Tasks
function convertFonts() {
	return gulp.src(FONT_SRC)
		.pipe(ttftowoff({ clone: true, ignoreExt: true }))
		.pipe(gulp.dest(FONT_DEST));
}

exports.convertFonts = convertFonts;
exports.FONT_SRC = FONT_SRC;
exports.FONT_DEST = FONT_DEST;
