/*
 * @title Sass
 * @description Compile your Sass !
 */

// Dependencies
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync'
import dotenv from 'dotenv';

// Config
dotenv.config();

// Consts
export const SASS_SRC = process.env.SASS_SRC ? process.env.SASS_SRC : `${process.env.SRC}/**/*.scss`;
export const SASS_DEST = process.env.SASS_DEST ? process.env.SASS_DEST : process.env.DEST;

// Task
export function compileSass() {
	return gulp.src(SASS_SRC)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				'node_modules'
			],
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer()) // Add vendor prefixes to CSS rules by Can I Use
		.pipe(cleanCSS()) // Minify CSS
		.pipe(sourcemaps.write())
		.pipe(plumber.stop())
		.pipe(gulp.dest(SASS_DEST))
		.pipe(browserSync.stream());
}