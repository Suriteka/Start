import dotenv from 'dotenv';

dotenv.config();

const JS_NAME = process.env.JS_NAME ? process.env.JS_NAME : 'bundle.js';
const MODE = process.env.NODE_ENV === 'dev' ? 'development' : 'production';

module.exports = {
	mode: MODE,
	output: {
		filename: JS_NAME,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
						['latest', { modules: false }],
					],
				},
			},
		],
	},
};
