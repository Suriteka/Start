/*
 * @title Scripts
 * @description A task to concatenate and compress js files via webpack
 */

// Dependencies
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig  from '../webpack.config';
import named from 'vinyl-named';
import rename from 'gulp-rename';
import dotenv from 'dotenv';

// Config
dotenv.config();

// Consts 
export const JS_SRC = process.env.JS_SRC ? process.env.JS_SRC : `${process.env.SRC}/**/*.js`;
export const JS_DEST = process.env.JS_DEST ? process.env.JS_DEST : process.env.DEST;

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

export function transpileScripts() {
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

export const scripts = gulp.series(lintScripts, transpileScripts);
