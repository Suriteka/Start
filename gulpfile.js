/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

// Dependencies
const gulp = require('gulp');

// Tasks
const serve = require('./tasks/serve').serve;
const clean = require('./tasks/clean').clean;
const compileHtml = require('./tasks/html').compileHtml;
const compileSass = require('./tasks/sass').compileSass;
const scripts = require('./tasks/scripts').scripts;
const optimizeImages = require('./tasks/images').optimizeImages;
const convertFonts = require('./tasks/fonts').convertFonts;
const runRevision = require('./tasks/revision').runRevision;

// Scripts
const build = gulp.series(
  clean,
  gulp.series(
   gulp.parallel(compileHtml, compileSass, scripts, optimizeImages, convertFonts),
   runRevision
  )
);

const dev = gulp.series(
  clean,
  gulp.parallel(compileHtml, compileSass, scripts, optimizeImages, convertFonts),
  serve
);

exports.build = build;
exports.dev = dev;
exports.isProd = process.env.NODE_ENV === 'prod';
