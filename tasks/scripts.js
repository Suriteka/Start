import gulp from 'gulp';
import eslint from 'gulp-eslint';
import gulpIf from 'gulp-if';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig  from '../webpack.config';
import dotenv from 'dotenv';

dotenv.config();

const JS_SRC = process.env.JS_SRC ? process.env.JS_SRC : `${process.env.SRC}/**/*.js`;
const JS_DEST = process.env.JS_DEST ? process.env.JS_DEST : process.env.DEST;

function isFixed(file) {
	return file.eslint != null && file.eslint.fixed;
}

function lintScripts() {
	return gulp.src(JS_SRC)
		.pipe(eslint({ fix: true }))
		.pipe(eslint.format())
		.pipe(gulpIf(isFixed, gulp.dest(process.env.SRC)))
}

function compileScripts() {
	return gulp.src(JS_SRC)
		.pipe(webpackStream(webpackConfig), webpack)
		.on('error', function handleError() { // It crashes if we make an arrow function
			this.emit('end'); // Recover from errors
		})
		.pipe(gulp.dest(JS_DEST));
}

export { JS_SRC, JS_DEST };

const runScripts = gulp.series(lintScripts, compileScripts);
export default runScripts;

gulp.task('scripts', runScripts);
