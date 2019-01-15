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
  callback();
}

export function reload(callback) {
  browserSync.reload();
  callback();
}
