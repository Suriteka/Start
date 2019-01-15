/*
 * @title HTML
 * @description Minify and improve your HTML
 */

// Dependencies
import gulp from 'gulp';
import htmlMinify from 'gulp-html-minify';
import plumber from 'gulp-plumber';
import dotenv from 'dotenv';

// Config
dotenv.config()

// Consts
export const HTML_SRC = process.env.HTML_SRC ? process.env.HTML_SRC : `${process.env.SRC}/**/*.html`;
export const HTML_DEST = process.env.HTML_DEST ? process.env.HTML_DEST : process.env.DEST;

// Tasks
export function compileHtml() {
	return gulp.src(HTML_SRC)
		.pipe(plumber())
		.pipe(htmlMinify())
		.pipe(plumber.stop())
		.pipe(gulp.dest(HTML_DEST));
}
