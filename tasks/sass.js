/*
 * @title Sass
 * @description Compile your Sass !
 */

// Dependencies
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const dotenv = require('dotenv');

// Config
dotenv.config();

// Consts
const SASS_SRC = process.env.SASS_SRC ? process.env.SASS_SRC : `${process.env.SRC}/**/*.scss`;
const SASS_DEST = process.env.SASS_DEST ? process.env.SASS_DEST : process.env.DEST;

const isProd = require('../gulpfile').isProd;

// Task
function compileSass() {
	return gulp.src(SASS_SRC)
		.pipe(plumber({ errorHandler: function(err) {
            browserSync.notify(err.message, 3000);
			this.emit('end');
        }}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				'node_modules'
			],
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer()) // Add vendor prefixes to CSS rules by Can I Use
		.pipe(cleanCSS()) // Minify CSS
		.pipe(gulpIf(!isProd, sourcemaps.write()))
		.pipe(gulp.dest(SASS_DEST))
		.pipe(browserSync.stream());
}

exports.compileSass = compileSass;
exports.SASS_SRC = SASS_SRC;
exports.SASS_DEST = SASS_DEST;
