/*
 * @title Images
 * @description Improve and compress images
 */

// Dependencies
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const dotenv = require('dotenv');

// Config
dotenv.config();

// Consts
const IMG_SRC = process.env.IMG_SRC ? process.env.IMG_SRC : `${process.env.SRC}/**/*.{jpg,jpeg,png,svg,gif,webp}`;
const IMG_DEST = process.env.IMG_DEST ? process.env.IMG_DEST : process.env.DEST;

// Tasks
function optimizeImages() {
	return gulp.src(IMG_SRC)
		.pipe(imagemin())
		.pipe(gulp.dest(IMG_DEST));
}

exports.optimizeImages = optimizeImages;
exports.IMG_SRC = IMG_SRC;
exports.IMG_DEST = IMG_DEST;
