/*
 * @title Clean
 * @description Empty the destination folder
 */

// Dependencies
const del = require('del');
const dotenv = require('dotenv');

// Config
dotenv.config();

// Task
function clean () {
	return del(`${process.env.DEST}/*`);
}

exports.clean = clean;
