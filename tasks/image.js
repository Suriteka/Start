import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import dotenv from 'dotenv';

dotenv.config();


const IMG_SRC = process.env.IMG_SRC ? process.env.IMG_SRC : `${process.env.SRC}/**/*.{png,gif,jpg,svg}`;
const IMG_DEST = process.env.IMG_DEST ? process.env.IMG_DEST : process.env.DEST;

function optimizeImages() {
	return gulp.src(IMG_SRC)
		.pipe(plumber()) // Prevent pipe breaking caused by errors
		.pipe(imagemin())
		.pipe(plumber.stop())
		.pipe(gulp.dest(IMG_DEST));
}

export { IMG_SRC, IMG_DEST };

const runImages = gulp.series(optimizeImages);
export default runImages;

gulp.task('images', runImages);
