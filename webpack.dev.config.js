const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const px2rem = require('postcss-px2rem');
const csso = require('postcss-csso');

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
			let arr = [
				px2rem({remUnit: 36}), 
				csso({ restructure: false })
			];
		    return arr;
		},
		cssModules: {
		    localIdentName: '[path][name]-[local]-[hash:base64:5]',
		    camelCase: true
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