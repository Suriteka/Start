import gulp from 'gulp';
import htmlMinify from 'gulp-html-minify';
import plumber from 'gulp-plumber';
import dotenv from 'dotenv';

dotenv.config();

const HTML_SRC = process.env.HTML_SRC ? process.env.HTML_SRC : `${process.env.SRC}/**/*.html`;
const HTML_DEST = process.env.HTML_DEST ? process.env.HTML_DEST : process.env.DEST;

function compileHtml() {
	return gulp.src(HTML_SRC)
		.pipe(plumber())
		.pipe(htmlMinify())
		.pipe(plumber.stop())
		.pipe(gulp.dest(HTML_DEST));
}

export { HTML_SRC, HTML_DEST };

const runHtml = gulp.series(compileHtml);
export default runHtml;

gulp.task('html', runHtml);
