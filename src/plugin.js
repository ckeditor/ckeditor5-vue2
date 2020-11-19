/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

 /* globals console */

import Vue from 'vue';
import CKEditorComponent from './ckeditor.js';

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

/**
 * Checks if CKEditor plugin supports currently installed Vue. This plugin supports only Vue 2.x.
 * The CKEditor plugin for Vue 3.x can be found on https://github.com/ckeditor/ckeditor5-vue2.
 *
 * @param {string} version Current version of the Vue framework.
 */
function isVueSupported( version ) {
	const currentVersion = parseInt( version );
	const isSupported = currentVersion >= 2;
	const isSupportedByThisRepo = currentVersion === 2;

	if ( !isSupportedByThisRepo ) {
		console.warn( 'This CKEditor plugin supports only Vue 2.x.' );

		if ( isSupported ) {
			console.warn(
				`For Vue ${ version }, which you have currently installed, please visit https://github.com/ckeditor/ckeditor5-vue.`
			);
		}
	}

	return isSupportedByThisRepo;
}

export default isVueSupported( Vue.version ) ? CKEditor : {};
