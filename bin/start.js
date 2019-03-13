#!/usr/bin/env node --harmony

/**
 * Made by Fantassin
 */

'use strict';

// Consts
const spawn = require('cross-spawn');

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Set the environment
process.env.NODE_ENV = 'dev';

console.log('Let\'s go renegade developer! ✈️ \n')

const start = spawn.sync(
	`gulp`,
	[
		`--gulpfile`,
		`${__dirname}/../gulpfile.js`,
		'--cwd',
		'./',
		'dev'
	],
	{ stdio: 'inherit' }
);''

if (start.signal) {
	if (start.signal === 'SIGKILL') {
	console.log(
		'The build failed because the process exited too early. ' +
		'This probably means the system ran out of memory or someone called ' +
		'`kill -9` on the process.'
	);
	} else if (start.signal === 'SIGTERM') {
	console.log(
		'The build failed because the process exited too early. ' +
		'Someone might have called `kill` or `killall`, or the system could ' +
		'be shutting down.'
	);
	}
	process.exit(1);
}


process.exit(start.status);