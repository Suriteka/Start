/*
 * @title Webpack Config
 */

// Dependencies
import dotenv from 'dotenv';
import glob from 'glob';


// Config
import { isProd } from './gulpfile.babel';
const MODE = isProd ? 'production' : 'development';

dotenv.config();

const JS_SRC = process.env.JS_SRC ? process.env.JS_SRC : `${process.env.SRC}/**/*.js`;
const JS_DEST = process.env.JS_DEST ? process.env.JS_DEST : process.env.DEST;

console.log(JS_SRC);

// Webpack
module.exports  = {
	mode: MODE,
	entry: glob.sync(JS_SRC),
	output: {
		filename: '[name].js',
		path: __dirname + JS_DEST
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
