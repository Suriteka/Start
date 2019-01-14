/*
 * @title Images
 * @description Improve and compress images
 */

// Dependencies
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// Config
import { IMG_SRC, IMG_DEST } from '../gulpfile.babel';

// Tasks
export function optimizeImages() {
	return gulp.src(IMG_SRC)
		.pipe(imagemin())
		.pipe(gulp.dest(IMG_DEST));
}
