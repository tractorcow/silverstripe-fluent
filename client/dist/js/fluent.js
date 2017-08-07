/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.jQuery.entwine('ss', function ($) {
  $('input[data-hides]').entwine({
    onmatch: function onmatch() {
      this._super();
      var hideName = this.data('hides');
      var target = $('[name=\'' + hideName + '\']').closest('.field');
      if (this.is(':checked')) {
        target.hide();
      } else {
        target.show();
      }
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    onchange: function onchange() {
      var hideName = this.data('hides');
      var target = $('[name=\'' + hideName + '\']').closest('.field');
      if (this.is(':checked')) {
        target.slideUp();
      } else {
        target.slideDown();
      }
    }
  });

  $('.cms > .cms-container > .cms-menu > .cms-panel-content').entwine({
    fluentConfig: function fluentConfig() {
      var section = 'TractorCow\\Fluent\\Control\\LocaleAdmin';
      if (window && window.ss && window.ss.config && window.ss.config.sections) {
        var config = window.ss.config.sections.find(function (next) {
          return next.name === section;
        });
        if (config) {
          return config.fluent || {};
        }
      }
      return {};
    },
    onmatch: function onmatch() {
      this._super();
      var config = this.fluentConfig();

      if (typeof config.locales === 'undefined' || typeof config.title === 'undefined') {
        return;
      }
      var buttonTitle = config.title;
      var selector = $('<div class=\'cms-fluent-selector\'>\n          <span class=\'icon icon-16 icon-fluent-translate\'>&nbsp;</span>\n          <span class=\'text\'></span>\n          <a class=\'cms-fluent-selector-flydown\' type=\'button\'>\n            <span class=\'icon icon-fluent-select\'></span>\n          </a>\n          <ul class=\'cms-fluent-selector-locales\'></ul>\n        </div>');
      $('.cms-fluent-selector-flydown', selector).prop('title', buttonTitle);
      $('.cms-fluent-selector-flydown span', selector).text(buttonTitle);

      config.locales.forEach(function (locale) {
        var item = $("<li><a><span class='full-title'></span><span class='short-title'></span></a></li>");
        $('.full-title', item).text(locale.title);
        $('.short-title', item).text(locale.code.split('_')[0]);
        $('a', item).attr('data-locale', locale.code).attr('title', locale.title);
        $('.cms-fluent-selector-locales', selector).append(item);
      });

      $('.text', selector).text(config.locales[config.locale]);

      this.prepend(selector);
    }
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=fluent.js.map