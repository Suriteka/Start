/*
 * @title HTML
 * @description Minify and improve your HTML
 */

// Dependencies
import gulp from 'gulp';
import htmlMinify from 'gulp-html-minify';
import plumber from 'gulp-plumber';

// Config
import { HTML_SRC, HTML_DEST } from '../gulpfile.babel';

// Tasks
export function compileHtml() {
	return gulp.src(HTML_SRC)
		.pipe(plumber())
		.pipe(htmlMinify())
		.pipe(plumber.stop())
		.pipe(gulp.dest(HTML_DEST));
}
