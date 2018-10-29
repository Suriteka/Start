import gulp from 'gulp';
import access from 'gulp-accessibility';
import dotenv from 'dotenv';

dotenv.config();

function checkAccessibility() {
	return gulp.src(`${process.env.DEST}/*.html`)
		.pipe(access({ force: true }))
		.pipe(access.report({ reportType: 'txt' }))
		.pipe(gulp.dest('reports/accessibility'));
}

const runAccessibility = gulp.series(checkAccessibility);
export default runAccessibility;

gulp.task('accessibility', runAccessibility);
