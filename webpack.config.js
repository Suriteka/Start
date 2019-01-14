/*
 * @title Webpack Config
 */

// Dependencies
import glob from "glob";

// Config
import { isProd, JS_SRC } from './gulpfile.babel';

const MODE = isProd === 'dev' ? 'development' : 'production';

// Webpack
module.exports = {
	mode: MODE,
	entry: {
    	app: glob.sync(JS_SRC)
  	},
	output: {
    	filename: '[name].js',
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
