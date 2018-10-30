import gulp from 'gulp';
import ttftowoff from 'gulp-ttf2woff';
import dotenv from 'dotenv';

dotenv.config();

const FONT_SRC = process.env.FONT_SRC ? process.env.FONT_SRC : `${process.env.SRC}/**/*.{ttf,otf,woff,woff2}`;
const FONT_DEST = process.env.FONT_DEST ? process.env.FONT_DEST : process.env.DEST;

function convertFonts() {
	return gulp.src(FONT_SRC)
		.pipe(ttftowoff({ clone: true, ignoreExt: true }))
		.pipe(gulp.dest(FONT_DEST));
}

export { FONT_SRC, FONT_DEST };

const runFont = gulp.series(convertFonts);
export default runFont;

gulp.task('font', runFont);
