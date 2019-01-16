/*
 * @title Server
 * @description A task to initialise a local server
 */

// Dependencies
const gulp = require('gulp');
const browserSync = require('browser-sync');
const dotenv = require('dotenv');

const compileHtml = require('./html').compileHtml;
const compileSass = require('./sass').compileSass;
const scripts = require('./scripts').scripts;
const optimizeImages = require('./images').optimizeImages;
const convertFonts = require('./fonts').convertFonts;

// Config
dotenv.config();

// Consts
const HTML_SRC = require('./html').HTML_SRC;
const SASS_SRC = require('./sass').SASS_SRC;
const JS_SRC = require('./scripts').JS_SRC;
const IMG_SRC = require('./images').IMG_SRC;
const FONT_SRC = require('./fonts').FONT_SRC;

// Tasks
function serve(callback) {
  let options = {};

  if (process.env.URL) {
    options = {
      proxy: process.env.URL,
      notify: false
    };
  } else {
    options = {
      server: {
        baseDir: [ process.env.DEST ]
      },
      notify: false
    }
  }

  browserSync.init(options);
  watch();
  callback();
}

function reload(callback) {
  browserSync.reload();
  callback();
}

function watch() {
  gulp.watch(HTML_SRC, gulp.series(compileHtml, reload));
  gulp.watch(SASS_SRC, gulp.series(compileSass, reload));
  gulp.watch(JS_SRC, gulp.series(scripts, reload));
  gulp.watch(IMG_SRC, gulp.series(optimizeImages, reload));
  gulp.watch(FONT_SRC, gulp.series(convertFonts, reload));
}

exports.serve = serve;
