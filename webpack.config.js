/*
 * @title Webpack Config
 */

// Dependencies
import dotenv from 'dotenv';
import glob from 'glob';

// Config
import { isProd } from './gulpfile.babel';
const MODE = isProd ? 'production' : 'development';

const JS_SRC = process.env.JS_SRC ? process.env.JS_SRC : `${process.env.SRC}/**/*.js`;

// Webpack
module.exports  = {

	mode: MODE,

	entry: {
		app: glob.sync(JS_SRC)
	},
	output: {
		filename: '[name].js',
	},

	optimization: {
		splitChunks: {
		cacheGroups: {
			commons: {
			test: /[\\/]node_modules[\\/]/,
			name: 'vendor',
			chunks: 'all'
			}
		}
		}
	},

	module: {
	rules: [
		{
			test: /^(?!.*\.{test,min}\.js$).*\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		{
			test: /\.s?css$/,
			include: /node_modules/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
			],
		}
	]
	}
};
