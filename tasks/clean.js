import gulp from 'gulp';
import del from 'del';
import dotenv from 'dotenv';

dotenv.config();

function clean() {
	return del(`${process.env.DEST}/*`);
}

const runClean = gulp.series(clean);
export default runClean;

gulp.task('clean', clean);
