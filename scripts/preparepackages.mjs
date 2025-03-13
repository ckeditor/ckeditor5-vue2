#!/usr/bin/env node

/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* eslint-env node */

'use strict';

import { createRequire } from 'module';
import { Listr } from 'listr2';
import {
	getLastFromChangelog,
	getChangesForVersion,
	validateRepositoryToRelease,
	updateVersions,
	prepareRepository,
	cleanUpPackages,
	commitAndTag
} from '@ckeditor/ckeditor5-dev-release-tools';
import { tools } from '@ckeditor/ckeditor5-dev-utils';

const require = createRequire( import.meta.url );

const latestVersion = getLastFromChangelog();
const versionChangelog = getChangesForVersion( latestVersion );

const tasks = new Listr( [
	{
		title: 'Verifying the repository.',
		task: async () => {
			const errors = await validateRepositoryToRelease( {
				version: latestVersion,
				changes: versionChangelog,
				branch: 'master'
			} );

			if ( !errors.length ) {
				return;
			}

			return Promise.reject( 'Aborted due to errors.\n' + errors.map( message => `* ${ message }` ).join( '\n' ) );
		}
	},
	{
		title: 'Updating the `#version` field.',
		task: () => {
			return updateVersions( {
				version: latestVersion
			} );
		}
	},
	{
		title: 'Running build command.',
		task: () => {
			return tools.shExec( 'yarn run build', { async: true, verbosity: 'silent' } );
		}
	},
	{
		title: 'Creating the `ckeditor5-vue2` package in the release directory.',
		task: async () => {
			return prepareRepository( {
				outputDirectory: 'release',
				rootPackageJson: require( '../package.json' )
			} );
		}
	},
	{
		title: 'Cleaning-up.',
		task: () => {
			return cleanUpPackages( {
				packagesDirectory: 'release'
			} );
		}
	},
	{
		title: 'Commit & tag.',
		task: () => {
			return commitAndTag( {
				version: latestVersion,
				files: [
					'package.json'
				]
			} );
		}
	}
] );

tasks.run()
	.catch( err => {
		process.exitCode = 1;

		console.log( '' );
		console.error( err );
	} );
