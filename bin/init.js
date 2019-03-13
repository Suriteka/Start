/**
 * Made by Fantassin
 */

'use strict';

// Depedencies
const prompts = require('prompts');
const shell = require('shelljs');
const fs = require('fs');

// Questions
let start = [
    {
        type: 'confirm',
        name: 'wordpress',
        message: 'Do you want to install WordPress ?',
		initial: 'true'
    }
];

const url = 'gulp.local';
const dbname = 'wpclidemo';
const dbuser = 'root';
const dbpass = 'root';
const locale = 'fr_FR';

let wordpress = [
	{
		type: 'text',
        name: 'url',
        message: 'What is the url of the website?'
	},
	{
		type: 'text',
        name: 'title',
        message: 'What is the title of the website?'
	},
	{
		type: 'text',
        name: 'dbUrl',
        message: 'DBTime !📊 What is the host of the database?'
	},
	{
		type: 'text',
        name: 'dbUser',
        message: 'What is the username of the database?'
	},
	{
		type: 'password',
        name: 'dbPassword',
        message: 'What is the password of the database?'
	},
	{
		type: 'text',
        name: 'dbName',
        message: 'What is the name of the database?'
	},
	{
		type: 'text',
        name: 'locale',
        message: 'What is the name of the database?',
		initial: 'fr_FR'
	},
	{
		type: 'text',
        name: 'username',
        message: 'Almost finished! ✨ Which username do you want for WP?'
	},
	{
		type: 'password',
        name: 'password',
        message: 'Which password do you want for WP?'
	},
	{
		type: 'text',
        name: 'email',
        message: 'What is your email?'
	},
];
 
/* Functions */
async function askQuestions() {
	let startResponses = await prompts(start);

	if (startResponses.wordpress) {
		let wpResponses = await prompts(wordpress);
		installWordPress(wpResponses);
	} else {
		copyInitialFiles();
	}

	return "done";
}

/* Functions to install WP */
function installWordPress(options) {
	console.log("Installing WordPress");

	shell.exec('wp cli update');
	shell.exec(`wp core download --locale=' + ${options.locale} + ' --skip-content --force`);
	shell.exec(`wp core version`);
	// Init wp-config.php
	shell.exec(`wp config create --dbname=${options.dbName} --dbuser=${options.dbUser} --dbpass=${options.dbPassword} --locale=${locale}`);
	// Create DB
	shell.exec('wp db create');
	shell.exec(`'wp core install --url=${options.url} --title=${options.title} --admin_user=${options.username} --admin_password=${options.password} --admin_email=${options.email} --skip-email`);
	// Delete unused plugin
	shell.exec('wp plugin update --all');
	// Delete unused theme
	shell.exec('wp theme delete twentytwelve');
	shell.exec('wp theme delete twentythirteen');
	shell.exec('wp theme delete twentyfourteen');
	// Delete Blog description
	shell.exec('wp option update blogdescription');
	// Force permalinks structure
	shell.exec('wp rewrite structure "/%postname%/" --hard');
	shell.exec('wp rewrite flush --hard');

	// @TODO install custom theme? and then copy initial files
	console.log("Installation finished!\nYou can now create your theme 🔥");
}

/* Copy .ENV, .babelrc and eslint files */
function copyInitialFiles(wo) {
	console.log("Copying default files");

	// .env
	fs.copyFile(`${__dirname}/../example.env`, './.env', (err) => {
		if (err) throw err;
		console.log('.env was copied to the root');
	});

	// Eslintrc
	fs.copyFile(`${__dirname}/../.eslintignore`, './.eslintignore', (err) => {
		if (err) throw err;
		console.log('.eslintignore was copied to the root');
	});

	fs.copyFile(`${__dirname}/../.eslintrc`, './.eslintrc', (err) => {
		if (err) throw err;
		console.log('.eslintrc was copied to the root');
	});

	// Babel
	fs.copyFile(`${__dirname}/../.babelrc`, './.babelrc', (err) => {
		if (err) throw err;
		console.log('.babelrc was copied to the root');
	});
}

console.log('\n✨Fantassin — Gulp — Webpack and WordPress ✨');
console.log('Hello Renegade Developer \nBefore you start, I have some questions! 🚀\n');

askQuestions();
