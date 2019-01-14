/*
 * @title Server
 * @description A task to initialise a local server
 */

// Dependencies
import browserSync from 'browser-sync';
import dotenv from 'dotenv';

// Config
dotenv.config();

// Task
export function serve(callback) {
  browserSync.init({
    server: {
      baseDir: [ process.env.DEST ]
    },
    notify: false
  });
  callback();
}

export function reload(callback) {
  browserSync.reload();
  callback();
}
