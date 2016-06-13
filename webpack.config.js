var webpack = require("webpack");
var path = require('path');
var underscore = require('underscore');

const PATHS = {
  entry: path.join(__dirname, 'main.js'),
  dest: path.join(__dirname, 'static/x_m')
};

module.exports = {
  entry: ['./main.js'],
  output: {
    path: PATHS.dest,
    filename: 'bundle.js',
    chunkFilename: "[chunkhash].bundle.js",
    publicPath: '/static/x_m/'
  },
  module: {
    loaders: [{
      test: /zepto/,
      loader: 'exports?Zepto'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    root: path.resolve('./lib'),
    alias: {
      jquery: "zepto",
      zepto: "zepto.min.js",
      Backbone: path.resolve('./node_modules/backbone'),
      backbone: path.resolve('./node_modules/backbone')
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      "_": "underscore"
    })
  ],
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://47.89.28.131:5050',
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
