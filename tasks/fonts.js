/*
 * @title Fonts
 * @description Minify your fonts
 */

// Dependencies
import gulp from 'gulp';
import ttftowoff from 'gulp-ttf2woff';
import dotenv from 'dotenv';

// Config
dotenv.config();

// Consts
export const FONT_SRC = process.env.FONT_SRC ? process.env.FONT_SRC : `${process.env.SRC}/**/*.{ttf,otf,woff,woff2}`;
export const FONT_DEST = process.env.FONT_DEST ? process.env.FONT_DEST : process.env.DEST;

// Tasks
export function convertFonts() {
	return gulp.src(FONT_SRC)
		.pipe(ttftowoff({ clone: true, ignoreExt: true }))
		.pipe(gulp.dest(FONT_DEST));
}
