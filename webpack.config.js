var webpack = require("webpack");
var path = require('path');
var underscore = require('underscore');

module.exports = {
    entry: ['./main.js'],
    output: {
        path: './assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /zepto/,
            loader: 'exports?Zepto'
        }, {
            test: /\.css$/,
            loader: "style!css"
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
    ]
}
