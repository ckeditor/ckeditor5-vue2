#!/usr/bin/env node

/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/* eslint-env node */

import { generateChangelogForSinglePackage } from '@ckeditor/ckeditor5-dev-release-tools';

/**
 * Scripts for generating the changelog before starting the release process.
 */

generateChangelogForSinglePackage();
