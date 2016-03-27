/* eslint-disable */
'use strict';

var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname),

  entry: {
    library: [
      './node_modules/normalize.css/normalize.css',
      './node_modules/highlight.js/styles/solarized_light.css',
      './styles/library/library.scss',
    ],
    application: [
      './node_modules/normalize.css/normalize.css',
      './styles/application/application.scss',
    ],
    app: './library/index.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: 'library/index.html' }
    ])
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
      loaders: [ 'style', 'css' ]
    }, {
      test: /\.scss$/,
      loaders: [ 'style', 'css', 'sass' ]
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
