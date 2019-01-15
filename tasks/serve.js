/*
 * @title Server
 * @description A task to initialise a local server
 */

// Dependencies
import gulp from 'gulp';
import browserSync from 'browser-sync';
import dotenv from 'dotenv';

import { compileHtml } from './html';
import { compileSass } from './sass';
import { scripts } from './scripts';
import { optimizeImages } from './images';
import { convertFonts } from './fonts';

// Config
dotenv.config();

// Consts
import { HTML_SRC } from './html';
import { SASS_SRC } from './sass';
import { JS_SRC } from './scripts';
import { IMG_SRC } from './images';
import { FONT_SRC } from './fonts';

// Tasks
export function serve(callback) {
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

export function reload(callback) {
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