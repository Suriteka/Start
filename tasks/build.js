import gulp from 'gulp';
import dotenv from 'dotenv';
import runClean from './clean';
import runSass from './sass';
import runScripts from './scripts';
import runHtml from './html';
import runImages from './images';
import runAccessibility from './accessibility';
import runFont from './font';
import runRevision from './revision';
import runVendors from './vendors';

dotenv.config();

let runBuild;

if (process.env.NODE_ENV === 'prod') {
	runBuild = gulp.series(runClean, runHtml, gulp.parallel(runSass, runScripts, runImages), runFont, runAccessibility, runRevision, runVendors);
} else {
	runBuild = gulp.series(runClean, runHtml, gulp.parallel(runSass, runScripts, runImages, runFont));
}

export default runBuild;

gulp.task('build', runBuild);
