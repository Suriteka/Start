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
  options = {
    server: {
      baseDir: [ process.env.DEST ]
    },
    notify: false
  }

  if (process.env.URL) {
    options.proxy = process.env.URL
  }

  browserSync.init(options);
  callback();
}

export function reload(callback) {
  browserSync.reload();
  callback();
}
