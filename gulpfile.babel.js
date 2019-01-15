/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

// Dependencies
import gulp from 'gulp';
import dotenv from 'dotenv';

// Tasks
import { reload, serve } from './tasks/serve';
import { clean } from './tasks/clean';
import { compileHtml } from './tasks/html';
import { compileSass } from './tasks/sass';
import { scripts } from './tasks/scripts';
import { optimizeImages } from './tasks/images';
import { convertFonts } from './tasks/fonts';
import { runRevision } from './tasks/revision';

// Config
dotenv.config();

// HTML
export const HTML_SRC = process.env.HTML_SRC ? process.env.HTML_SRC : `${process.env.SRC}/**/*.html`;
export const HTML_DEST = process.env.HTML_DEST ? process.env.HTML_DEST : process.env.DEST;

// SASS
export const SASS_SRC = process.env.SASS_SRC ? process.env.SASS_SRC : `${process.env.SRC}/**/*.scss`;
export const SASS_DEST = process.env.SASS_DEST ? process.env.SASS_DEST : process.env.DEST;

// JS 
export const JS_SRC = process.env.JS_SRC ? process.env.JS_SRC : `${process.env.SRC}/**/*.js`;
export const JS_DEST = process.env.JS_DEST ? process.env.JS_DEST : process.env.DEST;

// IMG
export const IMG_SRC = process.env.IMG_SRC ? process.env.IMG_SRC : `${process.env.SRC}/**/*.{jpg,jpeg,png,svg,gif,webp}`;
export const IMG_DEST = process.env.IMG_DEST ? process.env.IMG_DEST : process.env.DEST;

// FONTS
export const FONT_SRC = process.env.FONT_SRC ? process.env.FONT_SRC : `${process.env.SRC}/**/*.{ttf,otf,woff,woff2}`;
export const FONT_DEST = process.env.FONT_DEST ? process.env.FONT_DEST : process.env.DEST;

// MODE 
export const isProd = process.env.NODE_ENV === 'prod';

// Gulp Tasks
function watch() {
  gulp.watch(HTML_SRC, gulp.series(compileHtml, reload));
  gulp.watch(SASS_SRC, gulp.series(compileSass, reload));
  gulp.watch(JS_SRC, gulp.series(scripts, reload));
  gulp.watch(IMG_SRC, gulp.series(optimizeImages, reload));
  gulp.watch(FONT_SRC, gulp.series(convertFonts, reload));
}

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
  serve,
  watch
);