import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig  from '../webpack.config';
import dotenv from 'dotenv';

dotenv.config();

const JS_SRC = process.env.JS_SRC ? process.env.JS_SRC : `${process.env.SRC}/**/*.js`;
const JS_DEST = process.env.JS_DEST ? process.env.JS_DEST : process.env.DEST;

function compileScripts() {
	return gulp.src(JS_SRC)
		.pipe(plumber()) // Prevent pipe breaking caused by errors
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(webpackStream(webpackConfig), webpack)
		.on('error', function handleError() {
			this.emit('end'); // Recover from errors
		})
		.pipe(plumber.stop())
		.pipe(gulp.dest(JS_DEST));
}

export { JS_SRC, JS_DEST };

const runScripts = gulp.series(compileScripts);
export default runScripts;

gulp.task('scripts', runScripts);
