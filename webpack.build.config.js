const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const postcss = require('postcss');
const dashboard = new Dashboard();
const px2rem = require('postcss-px2rem');
const csso = require('postcss-csso');

module.exports = {
	entry: path.resolve(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname, '/static'),
		publicPath: '/static/',
		filename: 'bundle.js'
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
		loaders: {
			sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!postcss-loader!sass-loader'),
		},
		postcss: function() {
			let arr = [
				px2rem({remUnit: 36}),
				autoprefixer({ browsers: ['last 4 versions'] }), 
				csso({ restructure: false })
			];
		    return arr;
		}
	},
  	resolve: {
	    extensions: ['', '.js', '.scss','.vue'],
	},
	plugins: [
		new ExtractTextPlugin('style.css', {
	      	allChunks: true,
	    }),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.NoErrorsPlugin(),
	    new DashboardPlugin(dashboard.setData)
  	]
};