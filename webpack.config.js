/* eslint-disable */
'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSass = new ExtractTextPlugin('[name].css');
var extractCss = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    normalize: './node_modules/normalize.css/normalize.css',
    highlight: './node_modules/highlight.js/styles/solarized_light.css',
    library: [
      './styles/library/library.scss',
    ],
    application: [
      './styles/application/application.scss',
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production') // This has effect on the react lib size
      }
    }),
    extractSass,
    extractCss,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true
      },
    }],
    loaders: [{
      test: /\.css$/,
      loader: extractCss.extract(['css']),
    }, {
      test: /\.scss$/,
      loader: extractSass.extract(['css', 'sass']),
    }, {
      test: /\.(woff2?|svg)$/,
      loader: 'url?limit=10000'
    }, {
     test: /\.(ttf|eot)$/,
     loader: 'file'
    }]
  },
  devtool: 'source-map',
  externals: { }
};
