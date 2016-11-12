const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const px2rem = require('postcss-px2rem');

module.exports = {
	entry: {
		'bundle.js': ['./src/main.js', 'webpack-hot-middleware/client']
	},
	output: {
		path: '/',
		publicPath: 'http://localhost:3000/static',
		filename: '[name]'
	},
	devServer: {
         quiet: true, 
         noInfo: true
    },
	module: {
	    loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
		    {
		        test: /\.scss$/,
		        loader: "style-loader!css-loader!postcss-loader!sass-loader"
		    },
			{ 
				test: /\.(html|tpl)$/, 
				loader: 'html-loader' 
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file?limit=8192',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
	    ]
	},
	vue: {
		postcss: function() {
		    return [px2rem({remUnit: 36})];
		}
	},
	devtool: '#eval-source-map',
  	resolve: {
	    extensions: ['', '.js', '.scss','.vue'],
	},
	plugins: [
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
  	]
};