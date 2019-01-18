/*
 * @title Revisions
 * @description Cache busting with gulp
 */

// Dependencies
const gulp = require('gulp');
const rev = require('gulp-rev');
const revFormat = require('gulp-rev-format');
const revDel = require('gulp-rev-delete-original');
const revRewrite = require('gulp-rev-rewrite');
const plumber = require('gulp-plumber');

// Tasks
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

exports.runRevision = gulp.series(addRevisionName, revisionRewrite);
