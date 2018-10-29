import gulp from 'gulp';
import rev from 'gulp-rev';
import revFormat from 'gulp-rev-format';
import revDel from 'gulp-rev-delete-original';
import revRewrite from 'gulp-rev-rewrite';
import dotenv from 'dotenv';
import plumber from 'gulp-plumber';

dotenv.config();

function addRevisionName() {
	return gulp.src([
		`${process.env.DEST}/**/*.css`,
		`${process.env.DEST}/**/*.js`
	])
		.pipe(plumber())
		.pipe(rev())
		.pipe(revDel())
		.pipe(revFormat({ prefix: '.' }))
		.pipe(gulp.dest(process.env.DEST))
		.pipe(rev.manifest({ path: 'manifest.json' }))
		.pipe(plumber.stop())
		.pipe(gulp.dest(process.env.DEST));
}

function revisionRewrite() {
    const manifest = gulp.src(`${process.env.DEST}/manifest.json`);

    return gulp.src(`${process.env.DEST}/**/*`)
        .pipe(revRewrite({ manifest }))
        .pipe(gulp.dest(process.env.DEST));
}

const runRevision = gulp.series(addRevisionName, revisionRewrite);
export default runRevision;

gulp.task('revision', addRevisionName);
gulp.task('revisionRewrite', revisionRewrite);