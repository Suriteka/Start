/*
 * @title Webpack Config
 */

// Dependencies

// Config
import { isProd } from './gulpfile.babel'
const MODE = isProd ? 'production' : 'development'

// Webpack
module.exports = {
  mode: MODE,
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
      }
    ]
  }
}
