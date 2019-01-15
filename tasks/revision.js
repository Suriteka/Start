/*
 * @title Revisions
 * @description Cache busting with gulp
 */

// Dependencies
import gulp from 'gulp';
import rev from 'gulp-rev';
import revFormat from 'gulp-rev-format';
import revDel from 'gulp-rev-delete-original';
import revRewrite from 'gulp-rev-rewrite';
import plumber from 'gulp-plumber';

// Tasks
export function addRevisionName() {
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

export function revisionRewrite() {
    const manifest = gulp.src(`${process.env.DEST}/manifest.json`);

    return gulp.src(`${process.env.DEST}/**/*`)
        .pipe(revRewrite({ manifest }))
        .pipe(gulp.dest(process.env.DEST));
}

export const runRevision = gulp.series(addRevisionName, revisionRewrite);