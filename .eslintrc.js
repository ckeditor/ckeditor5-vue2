/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* eslint-env node */

// Note: The ESLint configuration is mandatory for vue-cli.
module.exports = {
	'ignorePatterns': [
		'coverage/**'
	],
	'extends': 'ckeditor5',
	'rules': {
		'ckeditor5-rules/license-header': [ 'error', { headerLines: [
			'/**',
			' * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.',
			' * For licensing, see LICENSE.md.',
			' */'
		] } ]
	}
};
