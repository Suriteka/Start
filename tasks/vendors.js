import gulp from 'gulp';
import dotenv from 'dotenv';

dotenv.config();

const VENDOR_SRC = process.env.VENDOR_SRC ? process.env.VENDOR_SRC : `${process.env.SRC}/vendors/**/*`;
const VENDOR_DEST = process.env.VENDOR_DEST ? process.env.VENDOR_DEST : `${process.env.DEST}/vendors`;

const ROBOT_TXT = process.env.SRC + '/robots.txt';
const SITEMAP = process.env.SRC + '/sitemap.xml';
const HUMANS = process.env.SRC + '/humans.txt';

function copyVendors() {
	return gulp.src(VENDOR_SRC)
		.pipe(gulp.dest(VENDOR_DEST));
}

function copyFiles() {
	return gulp.src([ROBOT_TXT, SITEMAP, HUMANS], { allowEmpty: true })
		.pipe(gulp.dest(process.env.DEST + '/'));
}

export { VENDOR_SRC, VENDOR_DEST };

const runVendors = gulp.series(copyVendors, copyFiles);
export default runVendors;

gulp.task('vendors', runVendors);
