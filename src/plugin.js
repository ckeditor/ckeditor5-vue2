/**
 * @license Copyright (c) 2003-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Vue, { version as vueVersion } from 'vue';
import CKEditorComponent from './ckeditor.js';

/* istanbul ignore next */
const version = Vue ? Vue.version : vueVersion;
const [ major ] = version.split( '.' ).map( i => parseInt( i, 10 ) );

/* istanbul ignore if */
if ( major !== 2 ) {
	throw new Error(
		'The CKEditor plugin works only with Vue 2.x. ' +
		'For more information, please refer to ' +
		'https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v2.html'
	);
}

const CKEditor = {
	/**
	 * Installs the plugin, registering the `<ckeditor>` component.
	 *
	 * @param {Vue} Vue The Vue object.
	 */
	install( Vue ) {
		Vue.component( 'ckeditor', CKEditorComponent );
	},
	component: CKEditorComponent
};

export default CKEditor;
