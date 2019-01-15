/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

// Dependencies
import gulp from 'gulp';

// Tasks
import { reload, serve } from './tasks/serve';
import { clean } from './tasks/clean';
import { compileHtml } from './tasks/html';
import { compileSass } from './tasks/sass';
import { scripts } from './tasks/scripts';
import { optimizeImages } from './tasks/images';
import { convertFonts } from './tasks/fonts';
import { runRevision } from './tasks/revision';

// MODE 
export const isProd = process.env.NODE_ENV === 'prod';

// Scripts
export const build = gulp.series(
  clean,
  gulp.series(
    gulp.parallel(compileHtml, compileSass, scripts, optimizeImages, convertFonts),
    runRevision
  )
);

export const dev = gulp.series(
  clean,
  gulp.parallel(compileHtml, compileSass, scripts, optimizeImages, convertFonts),
  serve
);