import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import plumber from 'gulp-plumber';
import dotenv from 'dotenv';

dotenv.config();

const SASS_SRC = process.env.SASS_SRC ? process.env.SASS_SRC : `${process.env.SRC}/**/*.scss`;
const SASS_DEST = process.env.SASS_DEST ? process.env.SASS_DEST : process.env.DEST;

function compileSass() {
	return gulp.src(SASS_SRC)
		.pipe(plumber()) // Prevent pipe breaking caused by errors
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) // Compile SASS to CSS
		.on('error', function handleError() {
			this.emit('end'); // Recover from errors
		})
		.pipe(autoprefixer()) // Add vendor prefixes to CSS rules by Can I Use
		.pipe(cleanCSS()) // Minify CSS
		.pipe(sourcemaps.write())
		.pipe(plumber.stop())
		.pipe(gulp.dest(SASS_DEST));
}

export { SASS_SRC, SASS_DEST };

const runSass = gulp.series(compileSass);
export default runSass;

gulp.task('sass', runSass);
