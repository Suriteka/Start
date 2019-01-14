/*
 * @title Scripts
 * @description A task to concatenate and compress js files via webpack
 */

// Dependencies
import gulp from 'gulp';
import named from 'vinyl-named';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig  from '../webpack.config';
import errorHandler from './errorHandler';

// Consts
import { JS_SRC, JS_DEST } from '../gulpfile.babel';

// Tasks
function isFixed(file) {
	return file.eslint != null && file.eslint.fixed;
}

function lintScripts() {
	return gulp.src(JS_SRC)
		.pipe(eslint({ fix: true }))
		.pipe(eslint.format())
		.pipe(gulpIf(isFixed, gulp.dest(JS_SRC)))
}

export function transpileScripts() {
	return gulp.src(JS_SRC)
		.pipe(plumber({errorHandler}))
		.pipe(named())
    	.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest(JS_DEST));
}

export const scripts = gulp.series(lintScripts, transpileScripts);
