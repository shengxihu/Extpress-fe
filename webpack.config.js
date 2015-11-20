var webpack = require("webpack");
var path = require('path');

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
        },
         { test: /\.css$/, loader: "style!css" } 
        ]
    },
    resolve: {
        root: path.resolve('./lib'),
        alias: {
            jquery: "zepto",
            zepto: "zepto.min.js"
        }
    }
}
