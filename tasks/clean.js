/*
 * @title Clean
 * @description Empty the destination folder
 */

// Dependencies
import del from 'del';
import dotenv from 'dotenv';

// Config
dotenv.config();

// Task
export function clean() {
	return del(`${process.env.DEST}/*`);
}