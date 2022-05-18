Changelog
=========

## [3.0.1](https://github.com/ckeditor/ckeditor5-vue2/compare/v3.0.0...v3.0.1) (2022-05-18)

### Bug fixes

* Synchronize the editor content after the editor is ready. Closes [#21](https://github.com/ckeditor/ckeditor5-vue2/issues/21). ([commit](https://github.com/ckeditor/ckeditor5-vue2/commit/9c56952396dbcd61836f1f36af9041edf1ca7e54))


## [3.0.0](https://github.com/ckeditor/ckeditor5-vue2/compare/v2.0.0...v3.0.0) (2022-04-12)

### BREAKING CHANGES

* Due to introducing the lock mechanism for the `Editor#isReadOnly` property, the `<CKEditor>` component uses the new way of enabling the read-only mode in the editor. The component requires an instance of CKEditor 5 in version 34 or higher. See [ckeditor/ckeditor5#10496](https://github.com/ckeditor/ckeditor5/issues/10496).

### Other changes

* Aligned the `<CKEditor>` component API to use the new lock mechanism when enabling/disabling the read-only mode. ([commit](https://github.com/ckeditor/ckeditor5-vue2/commit/167b217aaadae976e238ee70c28c6d70b7b3b3d6))
* Bumped Karma test runner to v6.x. Closes [#18](https://github.com/ckeditor/ckeditor5-vue2/issues/18). ([commit](https://github.com/ckeditor/ckeditor5-vue2/commit/d81d794d07c8362f7efc31541228dc010b5cface))


## [2.0.0](https://github.com/ckeditor/ckeditor5-vue2/compare/v1.0.5...v2.0.0) (2022-03-17)

### BREAKING CHANGES

* Upgraded the minimal versions of Node.js to `14.0.0` due to the end of LTS.

### Other changes

* Updated the required version of Node.js to 14. Closes [#10972](https://github.com/ckeditor/ckeditor5-vue2/issues/10972). ([commit](https://github.com/ckeditor/ckeditor5-vue2/commit/bd6e5c4f3d7b0d5fa6a94d2e3165d40c351a3179))


## [1.0.5](https://github.com/ckeditor/ckeditor5-vue2/compare/v1.0.4...v1.0.5) (2020-11-23)

### Bug fixes

* When using the `<CKEditor>` component with an unsupported version of Vue.js, the component will display an error. Closes [#6](https://github.com/ckeditor/ckeditor5-vue2/issues/6). ([commit](https://github.com/ckeditor/ckeditor5-vue2/commit/840dcfa3d91ff14e70485ee0c9d9623c8ec168a2))


## [1.0.4](https://github.com/ckeditor/ckeditor5-vue2/compare/v1.0.3...v1.0.4) (2020-11-20)

Starting from this version, the CKEditor 5 WYSIWYG editor component is compatible with Vue.js 2.x only. For Vue.js 3.x, check the dedicated [`@ckeditor/ckeditor5-vue`](https://www.npmjs.com/package/@ckeditor/ckeditor5-vue) component.


## [1.0.3](https://github.com/ckeditor/ckeditor5-vue/compare/v1.0.2...v1.0.3) (2020-09-22)

### Bug fixes

* The editor should not slow down with lots of content when using the integration. Closes [#153](https://github.com/ckeditor/ckeditor5-vue/issues/153). ([commit](https://github.com/ckeditor/ckeditor5-vue/commit/df4410a077c5eed5b95533f26f28e88882af289d))

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* The reference to the CKEditor 5 instance previously available under the `instance` property of the component (data) is now private (`$_instance`). We recommend you use the [`ready`](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs.html#ready) component event to access the editor API instead.

## [1.0.2](https://github.com/ckeditor/ckeditor5-vue/compare/v1.0.1...v1.0.2) (2020-09-01)

### Bug fixes

* The `#input` event should be fired immediately despite being debounced to prevent race conditions. Closes [#149](https://github.com/ckeditor/ckeditor5-vue/issues/149). ([commit](https://github.com/ckeditor/ckeditor5-vue/commit/c8ff4da551f51433398785c340c65031e63d332a))


## [1.0.1](https://github.com/ckeditor/ckeditor5-vue/compare/v1.0.0...v1.0.1) (2019-12-05)

### Bug fixes

* Editor config defined in the component should not be mutable. Closes [#101](https://github.com/ckeditor/ckeditor5-vue/issues/101). ([42651e3](https://github.com/ckeditor/ckeditor5-vue/commit/42651e3))


## [1.0.0](https://github.com/ckeditor/ckeditor5-vue/compare/v1.0.0-beta.2...v1.0.0) (2019-09-20)

### Bug fixes

* [`config.initialData`](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html#member-initialData) should be used to set the initial state of the editor instead of unsafe `innerHTML`. Closes [#51](https://github.com/ckeditor/ckeditor5-vue/issues/51). ([950b49a](https://github.com/ckeditor/ckeditor5-vue/commit/950b49a))

## [1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-vue/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2019-04-24)

### Bug fixes

* Improved performance when editing large content. Debounced the component `#input` event. Closes [#42](https://github.com/ckeditor/ckeditor5-vue/issues/42). ([dfaee36](https://github.com/ckeditor/ckeditor5-vue/commit/dfaee36))
* The data initialization should not break collaboration. Instead of using `editor.setData()`, the initial content is now set via `innerHTML` of the source element. Closes [#47](https://github.com/ckeditor/ckeditor5-vue/issues/47). ([6f821fa](https://github.com/ckeditor/ckeditor5-vue/commit/6f821fa))


## [1.0.0-beta.1](https://github.com/ckeditor/ckeditor5-vue/tree/v1.0.0-beta.1) (2018-11-06)

First developer preview. It contains a ready-to-use `<ckeditor>` component that allows using CKEditor 5 Builds and CKEditor 5 Framework in Vue.js applications.
