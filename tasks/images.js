/*
 * @title Images
 * @description Improve and compress images
 */

// Dependencies
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import dotenv from 'dotenv';

// Config
dotenv.config();

// Consts
export const IMG_SRC = process.env.IMG_SRC ? process.env.IMG_SRC : `${process.env.SRC}/**/*.{jpg,jpeg,png,svg,gif,webp}`;
export const IMG_DEST = process.env.IMG_DEST ? process.env.IMG_DEST : process.env.DEST;

// Tasks
export function optimizeImages() {
	return gulp.src(IMG_SRC)
		.pipe(imagemin())
		.pipe(gulp.dest(IMG_DEST));
}
