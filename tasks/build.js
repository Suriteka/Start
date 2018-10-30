import gulp from 'gulp';
import dotenv from 'dotenv';
import runClean from './clean';
import runSass from './sass';
import runScripts from './scripts';
import runHtml from './html';
import runImages from './images';
import runAccessibility from './accessibility';
import runFonts from './fonts';
import runRevision from './revision';
import runVendors from './vendors';

dotenv.config();

let runBuild;

if (process.env.NODE_ENV === 'prod') {
	runBuild = gulp.series(runClean, runHtml, gulp.parallel(runSass, runScripts, runImages), runFonts, runAccessibility, runRevision, runVendors);
} else {
	runBuild = gulp.series(runClean, runHtml, gulp.parallel(runSass, runScripts, runImages, runFonts));
}

export default runBuild;

gulp.task('build', runBuild);
