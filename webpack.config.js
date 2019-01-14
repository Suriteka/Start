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
		rules: [{
			test: /^(?!.*\.{test,min}\.js$).*\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
};
