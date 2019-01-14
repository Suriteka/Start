/*
 * @title Fonts
 * @description Minify your fonts
 */

// Dependencies
import gulp from 'gulp';
import ttftowoff from 'gulp-ttf2woff';

// Config
import { FONT_SRC, FONT_DEST } from '../gulpfile.babel';

// Tasks
export function convertFonts() {
	return gulp.src(FONT_SRC)
		.pipe(ttftowoff({ clone: true, ignoreExt: true }))
		.pipe(gulp.dest(FONT_DEST));
}
