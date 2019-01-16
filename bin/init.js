#!/usr/bin/env node --harmony

/**
 * Made by Fantassin
 */

'use strict';

// Depedencies
var prompt = require('prompt');

// Init
prompt.start();

// Prompt
prompt.get([
		{
			name: 'Hey! Do you want to init the project ? 🎀',
			required: true
		},
	], function (err, result) {
	console.log('result.username');
});