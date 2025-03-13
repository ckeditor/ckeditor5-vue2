/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/* eslint-env node */

import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import { bundler } from '@ckeditor/ckeditor5-dev-utils';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );

export default {
	mode: 'production',
	devtool: 'source-map',
	entry: path.join( __dirname, 'src', 'plugin.js' ),

	output: {
		library: 'CKEditor',

		path: path.join( __dirname, 'dist' ),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	optimization: {
		minimizer: [
			new TerserPlugin( {
				sourceMap: true,
				terserOptions: {
					output: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				},
				extractComments: false
			} )
		]
	},

	plugins: [
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} )
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},

	externals: {
		vue: {
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue',
			root: 'Vue'
		}
	}
};
