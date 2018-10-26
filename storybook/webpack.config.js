require('@babel/register');

const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', { loose: true, modules: false, useBuiltIns: 'entry' }],
						'@babel/preset-react',
					],
					plugins: [
						'react-hot-loader/babel',
						'@babel/plugin-syntax-dynamic-import',
						'@babel/plugin-syntax-import-meta',
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-proposal-json-strings',
						'@babel/plugin-transform-react-constant-elements',
					],
				},
			},
		],
	},
	externals: {
		jsdom: 'window',
		cheerio: 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': 'window',
		'react/addons': true,
	},
};
