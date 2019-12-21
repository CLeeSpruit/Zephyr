const path = require('path');

const config = {
	entry: {
		zephyr: './zephyr.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	target: 'web',
	output: {
		filename: 'zephyr.js',
		library: 'zephyr',
		libraryTarget: 'umd'
	},
	devtool: 'source-map',
	mode: 'production',
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
		extensions: ['.ts', '.js', '.json']
	}
};

module.exports = [config];
