(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapAutosuggest"] = factory(require("react"), require("react-dom"), require("react-bootstrap"));
	else
		root["ReactBootstrapAutosuggest"] = factory(root["React"], root["ReactDOM"], root["ReactBootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ItemAdapter = __webpack_require__(5);

var _ItemAdapter2 = _interopRequireDefault(_ItemAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListAdapter = function () {
  function ListAdapter() {
    _classCallCheck(this, ListAdapter);
  }

  _createClass(ListAdapter, [{
    key: 'receiveProps',
    value: function receiveProps(props, itemAdapter) {
      this.props = props;
      this.itemAdapter = itemAdapter;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(list) {
      return !this.getLength(list);
    }
  }, {
    key: 'filter',
    value: function filter(list, predicate) {
      return this.toArray(list).filter(predicate);
    }
  }, {
    key: 'find',
    value: function find(list, predicate) {
      return this.toArray(list).find(predicate);
    }
  }, {
    key: 'findMatching',
    value: function findMatching(list, inputValue) {
      var _this = this;

      var foldedValue = this.itemAdapter.foldValue(inputValue);
      return this.find(list, function (item) {
        return _this.itemAdapter.itemMatchesInput(item, foldedValue);
      });
    }
  }]);

  return ListAdapter;
}();

var _default = ListAdapter;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ListAdapter, 'ListAdapter', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ListAdapter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ListAdapter.js');
}();

;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(24)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toStringOrNumber(v) {
  return typeof v === 'number' ? v : v.toString();
}

var ItemAdapter = function () {
  function ItemAdapter() {
    _classCallCheck(this, ItemAdapter);
  }

  _createClass(ItemAdapter, [{
    key: 'receiveProps',
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: 'getReactKey',
    value: function getReactKey(item) {
      var propName = this.props.itemReactKeyPropName;

      if (propName) {
        var value = item[propName];
        if (value != null) {
          return value;
        }
      }
      return toStringOrNumber(this.getRawValue(item));
    }
  }, {
    key: 'getSortKey',
    value: function getSortKey(item) {
      var propName = this.props.itemSortKeyPropName;

      if (propName) {
        var value = item[propName];
        if (value != null) {
          return value;
        }
      }
      return toStringOrNumber(this.getRawValue(item));
    }
  }, {
    key: 'getInputValue',
    value: function getInputValue(item) {
      return this.getRawValue(item).toString();
    }

    // protected

  }, {
    key: 'getRawValue',
    value: function getRawValue(item) {
      var propName = this.props.itemValuePropName;

      if (propName) {
        var value = item[propName];
        if (value != null) {
          return value;
        }
      }
      return item;
    }
  }, {
    key: 'getTextRepresentations',
    value: function getTextRepresentations(item) {
      return [this.foldValue(this.getInputValue(item))];
    }
  }, {
    key: 'foldValue',
    value: function foldValue(value) {
      // perform case folding by default; override for diacritic folding, etc.
      return value.toLowerCase();
    }
  }, {
    key: 'newFromValue',
    value: function newFromValue(value) {
      return value;
    }
  }, {
    key: 'itemIncludedByInput',
    value: function itemIncludedByInput(item, foldedValue) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.getTextRepresentations(item)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var text = _step.value;

          if (text.indexOf(foldedValue) >= 0) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  }, {
    key: 'itemMatchesInput',
    value: function itemMatchesInput(item, foldedValue) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.getTextRepresentations(item)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var text = _step2.value;

          if (text === foldedValue) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return false;
    }
  }, {
    key: 'sortItems',
    value: function sortItems(items, foldedValue) {
      var _this = this;

      items.sort(function (a, b) {
        return _this.compareItemsWithValue(a, b, foldedValue);
      });
      return items;
    }

    // protected

  }, {
    key: 'compareItemsWithValue',
    value: function compareItemsWithValue(a, b, foldedValue) {
      // sort matching item(s) before non-matching
      var aMatches = this.itemMatchesInput(a, foldedValue);
      var bMatches = this.itemMatchesInput(b, foldedValue);
      if (aMatches != bMatches) {
        return aMatches ? -1 : 1;
      }
      // then sort based on inclusion rank
      var aRank = this.itemInclusionRankForInput(a, foldedValue);
      var bRank = this.itemInclusionRankForInput(b, foldedValue);
      if (aRank != bRank) {
        return aRank - bRank;
      }
      // within same inclusion rank, compare items ignoring value
      return this.compareItems(a, b);
    }

    // protected

  }, {
    key: 'itemInclusionRankForInput',
    value: function itemInclusionRankForInput(item, foldedValue) {
      var contains = false;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.getTextRepresentations(item)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var text = _step3.value;

          var index = text.indexOf(foldedValue);
          if (index === 0) {
            return 0;
          }
          if (index > 0) {
            contains = true;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return contains ? 1 : 2;
    }

    // protected

  }, {
    key: 'compareItems',
    value: function compareItems(a, b) {
      var aSortKey = this.getSortKey(a);
      var bSortKey = this.getSortKey(b);
      return aSortKey < bSortKey ? -1 : aSortKey == bSortKey ? 0 : 1;
    }

    // protected

  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      // default rendering for both dropdown and multiple
      return this.getInputValue(item);
    }
  }, {
    key: 'renderSuggested',
    value: function renderSuggested(item) {
      // dropdown rendering
      return this.renderItem(item);
    }
  }, {
    key: 'renderSelected',
    value: function renderSelected(item) {
      // multiple selected rendering
      return this.renderItem(item);
    }
  }]);

  return ItemAdapter;
}();

var _default = ItemAdapter;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toStringOrNumber, 'toStringOrNumber', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ItemAdapter.js');

  __REACT_HOT_LOADER__.register(ItemAdapter, 'ItemAdapter', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ItemAdapter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ItemAdapter.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
}

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ListAdapter2 = __webpack_require__(0);

var _ListAdapter3 = _interopRequireDefault(_ListAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyedListAdapter = function (_ListAdapter) {
  _inherits(KeyedListAdapter, _ListAdapter);

  function KeyedListAdapter() {
    var itemKeyPropName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'key';

    _classCallCheck(this, KeyedListAdapter);

    var _this = _possibleConstructorReturn(this, (KeyedListAdapter.__proto__ || Object.getPrototypeOf(KeyedListAdapter)).call(this));

    _this.itemKeyPropName = itemKeyPropName;
    return _this;
  }

  _createClass(KeyedListAdapter, [{
    key: '_getKeyValueItem',
    value: function _getKeyValueItem(key, value) {
      var _ref;

      var itemKeyPropName = this.itemKeyPropName;
      // istanbul ignore next

      var _props$itemValuePropN = this.props.itemValuePropName,
          itemValuePropName = _props$itemValuePropN === undefined ? 'value' : _props$itemValuePropN;

      if (typeof value === 'object' && itemValuePropName in value) {
        if (value[itemKeyPropName] === key) {
          return value;
        } else {
          return _extends(_defineProperty({}, itemKeyPropName, key), value);
        }
      }
      return _ref = {}, _defineProperty(_ref, itemKeyPropName, key), _defineProperty(_ref, itemValuePropName, value), _ref;
    }
  }]);

  return KeyedListAdapter;
}(_ListAdapter3['default']);

var _default = KeyedListAdapter;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(KeyedListAdapter, 'KeyedListAdapter', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/KeyedListAdapter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/KeyedListAdapter.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(10);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ListAdapter2 = __webpack_require__(0);

var _ListAdapter3 = _interopRequireDefault(_ListAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayListAdapter = function (_ListAdapter) {
  _inherits(ArrayListAdapter, _ListAdapter);

  function ArrayListAdapter() {
    _classCallCheck(this, ArrayListAdapter);

    return _possibleConstructorReturn(this, (ArrayListAdapter.__proto__ || Object.getPrototypeOf(ArrayListAdapter)).apply(this, arguments));
  }

  _createClass(ArrayListAdapter, [{
    key: 'getLength',
    value: function getLength(list) {
      return list.length;
    }
  }, {
    key: 'filter',
    value: function filter(list, predicate) {
      return list.filter(predicate);
    }
  }, {
    key: 'find',
    value: function find(list, predicate) {
      return list.find(predicate);
    }
  }, {
    key: 'toArray',
    value: function toArray(list) {
      return list.slice();
    }
  }]);

  return ArrayListAdapter;
}(_ListAdapter3['default']);

var _default = ArrayListAdapter;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ArrayListAdapter, 'ArrayListAdapter', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ArrayListAdapter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ArrayListAdapter.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowEqual = __webpack_require__(1);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _keycode = __webpack_require__(7);

var _keycode2 = _interopRequireDefault(_keycode);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Choices = function (_React$Component) {
  _inherits(Choices, _React$Component);

  function Choices() {
    var _ref;

    _classCallCheck(this, Choices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /* istanbul ignore next: https://github.com/gotwarlost/istanbul/issues/690#issuecomment-265718617 */
    var _this = _possibleConstructorReturn(this, (_ref = Choices.__proto__ || Object.getPrototypeOf(Choices)).call.apply(_ref, [this].concat(_toConsumableArray(args))));

    var self = _this; // https://github.com/facebook/flow/issues/1517
    self._handleKeyDown = _this._handleKeyDown.bind(_this);
    self._handleKeyPress = _this._handleKeyPress.bind(_this);
    self._handleClose = _this._handleClose.bind(_this);
    self._handleClick = _this._handleClick.bind(_this);
    self._focusInput = _this._focusInput.bind(_this);
    return _this;
  }

  _createClass(Choices, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2['default'])(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoHeight = _props.autoHeight,
          disabled = _props.disabled,
          focused = _props.focused,
          inputValue = _props.inputValue,
          items = _props.items,
          renderItem = _props.renderItem,
          children = _props.children;

      var hasItems = items.length > 0;
      var inputStyle = void 0;
      if (hasItems) {
        // guesstimate input width since inline-block container
        // won't allow it to expand automatically
        inputStyle = { width: (inputValue.length + 1) * 0.75 + 'em' };
      }
      return _react2['default'].createElement(
        'ul',
        { className: (0, _classnames2['default'])('form-control', 'autosuggest-choices', {
            focused: focused,
            'has-items': hasItems,
            'auto-height': autoHeight
          }),
          disabled: disabled,
          onClick: this._focusInput },
        items.map(function (item, index) {
          return _react2['default'].createElement(
            'li',
            { key: index, 'data-index': index,
              tabIndex: !disabled ? '-1' : undefined,
              className: 'autosuggest-choice',
              onKeyDown: _this2._handleKeyDown,
              onKeyPress: _this2._handleKeyPress },
            _react2['default'].createElement('span', { className: 'autosuggest-choice-close',
              onClick: _this2._handleClose }),
            _react2['default'].createElement(
              'span',
              { className: 'autosuggest-choice-label',
                onClick: _this2._handleClick },
              renderItem(item)
            )
          );
        }),
        _react2['default'].createElement(
          'li',
          { className: 'autosuggest-input-choice', style: inputStyle },
          children
        )
      );
    }

    // autobind

  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(event) {
      switch (event.keyCode) {
        case _keycode2['default'].codes.left:
          this._focusPrevious();
          event.preventDefault();
          break;
        case _keycode2['default'].codes.right:
          this._focusNext();
          event.preventDefault();
          break;
        case _keycode2['default'].codes.backspace:
          this._removeActive(-1);
          event.preventDefault();
          break;
        case _keycode2['default'].codes['delete']:
          this._removeActive(0);
          event.preventDefault();
          break;
      }
    }

    // autobind

  }, {
    key: '_handleKeyPress',
    value: function _handleKeyPress(event) {
      // Chrome and Safari lets the input accept the key, Firefox does not
      this._focusInput();

      var onKeyPress = this.props.onKeyPress;
      // istanbul ignore else

      if (onKeyPress) {
        onKeyPress(event);
      }
    }

    // autobind

  }, {
    key: '_handleClose',
    value: function _handleClose(event) {
      if (!this.props.disabled && event.target instanceof HTMLElement) {
        var choices = event.target.parentNode;
        // istanbul ignore else
        if (choices instanceof Element) {
          var _index = Number(choices.getAttribute('data-index'));
          this._remove(_index);
        }
      }
      event.stopPropagation();
    }

    // autobind

  }, {
    key: '_handleClick',
    value: function _handleClick(event) {
      event.stopPropagation();
    }
  }, {
    key: 'focusFirst',
    value: function focusFirst() {
      var items = this._getFocusableMenuItems(false);
      if (items.length > 0) {
        items[0].focus();
      }
    }
  }, {
    key: 'focusLast',
    value: function focusLast() {
      var items = this._getFocusableMenuItems(false);
      if (items.length > 0) {
        items[items.length - 1].focus();
      }
    }
  }, {
    key: '_focusPrevious',
    value: function _focusPrevious() {
      var _getItemsAndActiveInd = this._getItemsAndActiveIndex(true),
          items = _getItemsAndActiveInd.items,
          activeIndex = _getItemsAndActiveInd.activeIndex;
      // istanbul ignore else: currently input handles wrap-around


      if (activeIndex > 0) {
        items[activeIndex - 1].focus();
      } else if (items.length > 0) {
        items[items.length - 1].focus();
      }
    }
  }, {
    key: '_focusNext',
    value: function _focusNext() {
      var _getItemsAndActiveInd2 = this._getItemsAndActiveIndex(true),
          items = _getItemsAndActiveInd2.items,
          activeIndex = _getItemsAndActiveInd2.activeIndex;
      // istanbul ignore else: currently input handles wrap-around


      if (activeIndex < items.length - 1) {
        items[activeIndex + 1].focus();
      } else if (items.length > 0) {
        items[0].focus();
      }
    }

    // autobind

  }, {
    key: '_focusInput',
    value: function _focusInput() {
      var node = _reactDom2['default'].findDOMNode(this);
      // istanbul ignore else
      if (node instanceof Element) {
        var input = node.querySelector('input');
        // istanbul ignore else
        if (input) {
          input.focus();
        }
      }
    }
  }, {
    key: '_remove',
    value: function _remove(index) {
      var onRemove = this.props.onRemove;
      // istanbul ignore else

      if (onRemove) {
        onRemove(index);
      }
    }
  }, {
    key: '_removeActive',
    value: function _removeActive(focusAdjust) {
      var _getItemsAndActiveInd3 = this._getItemsAndActiveIndex(false),
          items = _getItemsAndActiveInd3.items,
          activeIndex = _getItemsAndActiveInd3.activeIndex;
      // istanbul ignore else


      if (activeIndex >= 0) {
        var nextIndex = activeIndex + focusAdjust;
        if (nextIndex < 0 || nextIndex >= items.length - 1) {
          this._focusInput();
        } else if (focusAdjust != 0) {
          items[nextIndex].focus();
        }
        this._remove(activeIndex);
      }
    }
  }, {
    key: '_getItemsAndActiveIndex',
    value: function _getItemsAndActiveIndex(includeInput) {
      var items = this._getFocusableMenuItems(includeInput);
      var activeElement = document.activeElement;
      var activeIndex = activeElement ? items.indexOf(activeElement) : // istanbul ignore next
      -1;
      return { items: items, activeIndex: activeIndex };
    }
  }, {
    key: '_getFocusableMenuItems',
    value: function _getFocusableMenuItems(includeInput) {
      var node = _reactDom2['default'].findDOMNode(this);
      // istanbul ignore else
      if (node instanceof Element) {
        return Array.from(node.querySelectorAll(includeInput ? '[tabIndex="-1"],input' : '[tabIndex="-1"]'));
      } else {
        return [];
      }
    }
  }]);

  return Choices;
}(_react2['default'].Component);

Choices.propTypes = {
  autoHeight: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  focused: _propTypes2['default'].bool,
  inputValue: _propTypes2['default'].string,
  items: _propTypes2['default'].arrayOf(_propTypes2['default'].any).isRequired,
  onKeyPress: _propTypes2['default'].func,
  onRemove: _propTypes2['default'].func,
  renderItem: _propTypes2['default'].func.isRequired
};
var _default = Choices;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Choices, 'Choices', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/Choices.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/Choices.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ListAdapter2 = __webpack_require__(0);

var _ListAdapter3 = _interopRequireDefault(_ListAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyListAdapter = function (_ListAdapter) {
  _inherits(EmptyListAdapter, _ListAdapter);

  function EmptyListAdapter() {
    _classCallCheck(this, EmptyListAdapter);

    return _possibleConstructorReturn(this, (EmptyListAdapter.__proto__ || Object.getPrototypeOf(EmptyListAdapter)).apply(this, arguments));
  }

  _createClass(EmptyListAdapter, [{
    key: 'getLength',
    value: function getLength() {
      return 0;
    }
  }, {
    key: 'filter',
    value: function filter() {
      return [];
    }
  }, {
    key: 'find',
    value: function find() {}
  }, {
    key: 'toArray',
    value: function toArray() {
      return [];
    }
  }]);

  return EmptyListAdapter;
}(_ListAdapter3['default']);

var _default = EmptyListAdapter;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EmptyListAdapter, 'EmptyListAdapter', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/EmptyListAdapter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/EmptyListAdapter.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeyedListAdapter2 = __webpack_require__(9);

var _KeyedListAdapter3 = _interopRequireDefault(_KeyedListAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapListAdapter = function (_KeyedListAdapter) {
  _inherits(MapListAdapter, _KeyedListAdapter);

  function MapListAdapter() {
    _classCallCheck(this, MapListAdapter);

    return _possibleConstructorReturn(this, (MapListAdapter.__proto__ || Object.getPrototypeOf(MapListAdapter)).apply(this, arguments));
  }

  _createClass(MapListAdapter, [{
    key: 'getLength',
    value: function getLength(list) {
      return list.size;
    }
  }, {
    key: 'filter',
    value: function filter(list, predicate) {
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = list.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var entry = _step.value;

          var _item = this._getKeyValueItem(entry[0], entry[1]);
          if (predicate(_item)) {
            result.push(_item);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }, {
    key: 'find',
    value: function find(list, predicate) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = list.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var entry = _step2.value;

          var _item2 = this._getKeyValueItem(entry[0], entry[1]);
          if (predicate(_item2)) {
            return _item2;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'toArray',
    value: function toArray(list) {
      var result = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = list.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var entry = _step3.value;

          result.push(this._getKeyValueItem(entry[0], entry[1]));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return result;
    }
  }]);

  return MapListAdapter;
}(_KeyedListAdapter3['default']);

var _default = MapListAdapter;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MapListAdapter, 'MapListAdapter', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/MapListAdapter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/MapListAdapter.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeyedListAdapter2 = __webpack_require__(9);

var _KeyedListAdapter3 = _interopRequireDefault(_KeyedListAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectListAdapter = function (_KeyedListAdapter) {
  _inherits(ObjectListAdapter, _KeyedListAdapter);

  function ObjectListAdapter() {
    _classCallCheck(this, ObjectListAdapter);

    return _possibleConstructorReturn(this, (ObjectListAdapter.__proto__ || Object.getPrototypeOf(ObjectListAdapter)).apply(this, arguments));
  }

  _createClass(ObjectListAdapter, [{
    key: 'getLength',
    value: function getLength(list) {
      return Object.keys(list).length;
    }
  }, {
    key: 'filter',
    value: function filter(list, predicate) {
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(list)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _key = _step.value;

          var _item = this._getKeyValueItem(_key, list[_key]);
          if (predicate(_item)) {
            result.push(_item);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }, {
    key: 'find',
    value: function find(list, predicate) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(list)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key2 = _step2.value;

          var _item2 = this._getKeyValueItem(_key2, list[_key2]);
          if (predicate(_item2)) {
            return _item2;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'toArray',
    value: function toArray(list) {
      var result = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(list)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _key3 = _step3.value;

          result.push(this._getKeyValueItem(_key3, list[_key3]));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return result;
    }
  }]);

  return ObjectListAdapter;
}(_KeyedListAdapter3['default']);

var _default = ObjectListAdapter;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ObjectListAdapter, 'ObjectListAdapter', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ObjectListAdapter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/ObjectListAdapter.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shallowEqual = __webpack_require__(1);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(8);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestions = function (_React$Component) {
  _inherits(Suggestions, _React$Component);

  function Suggestions() {
    _classCallCheck(this, Suggestions);

    return _possibleConstructorReturn(this, (Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).apply(this, arguments));
  }

  _createClass(Suggestions, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2['default'])(this.props, nextProps);
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      var menuNode = _reactDom2['default'].findDOMNode(this.refs.menu);
      return menuNode != null && document && menuNode.contains(document.activeElement);
    }
  }, {
    key: 'focusFirst',
    value: function focusFirst() {
      var menu = this.refs.menu;

      menu.focusNext();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          datalistMessage = _props.datalistMessage,
          onDatalistMessageSelect = _props.onDatalistMessageSelect;

      return _react2['default'].createElement(
        _reactBootstrap.Dropdown.Menu,
        {
          labelledBy: this.props.labelledBy,
          onClose: this.props.onClose,
          open: this.props.open,
          ref: 'menu' },
        items.map(this._renderItem, this),
        this.props.filtered && _react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { key: 'show-all', onSelect: this.props.onDisableFilter },
          _react2['default'].createElement(
            'span',
            { className: 'show-all' },
            items.length === 0 ? _react2['default'].createElement('span', { className: 'no-matches' }) : null
          )
        ),
        datalistMessage && _react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { key: 'datalist-message',
            disabled: onDatalistMessageSelect == null,
            onSelect: onDatalistMessageSelect },
          datalistMessage
        )
      );
    }
  }, {
    key: '_renderItem',
    value: function _renderItem(item, index) {
      var active = this.props.isSelectedItem(item);
      return _react2['default'].createElement(
        _reactBootstrap.MenuItem,
        {
          active: active,
          className: index === this.props.focusedIndex && !active ? 'pseudofocused' : undefined,
          eventKey: item,
          key: this.props.getItemKey(item),
          onSelect: this.props.onSelect },
        this.props.renderItem(item)
      );
    }
  }]);

  return Suggestions;
}(_react2['default'].Component);

Suggestions.propTypes = {
  datalistMessage: _propTypes2['default'].node,
  filtered: _propTypes2['default'].bool,
  focusedIndex: _propTypes2['default'].number,
  getItemKey: _propTypes2['default'].func.isRequired,
  isSelectedItem: _propTypes2['default'].func.isRequired,
  items: _propTypes2['default'].arrayOf(_propTypes2['default'].any).isRequired,
  labelledBy: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
  onClose: _propTypes2['default'].func,
  onDatalistMessageSelect: _propTypes2['default'].func,
  onDisableFilter: _propTypes2['default'].func,
  onSelect: _propTypes2['default'].func.isRequired,
  open: _propTypes2['default'].bool,
  renderItem: _propTypes2['default'].func.isRequired
};
var _default = Suggestions;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Suggestions, 'Suggestions', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/Suggestions.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/Suggestions.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectListAdapter = exports.MapListAdapter = exports.ArrayListAdapter = exports.EmptyListAdapter = exports.ListAdapter = exports.ItemAdapter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowEqual = __webpack_require__(1);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _keycode = __webpack_require__(7);

var _keycode2 = _interopRequireDefault(_keycode);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(8);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = __webpack_require__(20);

var _warning2 = _interopRequireDefault(_warning);

var _Choices = __webpack_require__(15);

var _Choices2 = _interopRequireDefault(_Choices);

var _Suggestions = __webpack_require__(19);

var _Suggestions2 = _interopRequireDefault(_Suggestions);

var _ItemAdapter = __webpack_require__(5);

var _ItemAdapter2 = _interopRequireDefault(_ItemAdapter);

var _ListAdapter = __webpack_require__(0);

var _ListAdapter2 = _interopRequireDefault(_ListAdapter);

var _EmptyListAdapter = __webpack_require__(16);

var _EmptyListAdapter2 = _interopRequireDefault(_EmptyListAdapter);

var _ArrayListAdapter = __webpack_require__(14);

var _ArrayListAdapter2 = _interopRequireDefault(_ArrayListAdapter);

var _MapListAdapter = __webpack_require__(17);

var _MapListAdapter2 = _interopRequireDefault(_MapListAdapter);

var _ObjectListAdapter = __webpack_require__(18);

var _ObjectListAdapter2 = _interopRequireDefault(_ObjectListAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.ItemAdapter = _ItemAdapter2['default'];
exports.ListAdapter = _ListAdapter2['default'];
exports.EmptyListAdapter = _EmptyListAdapter2['default'];
exports.ArrayListAdapter = _ArrayListAdapter2['default'];
exports.MapListAdapter = _MapListAdapter2['default'];
exports.ObjectListAdapter = _ObjectListAdapter2['default'];

/**
 * Combo-box input component that combines a drop-down list and a single-line
 * editable text box. The set of options for the drop-down list can be
 * controlled dynamically. Selection of multiple items is supported using a
 * tag/pill-style user interface within a simulated text box.
 */
var Autosuggest = function (_React$Component) {
  _inherits(Autosuggest, _React$Component);

  _createClass(Autosuggest, null, [{
    key: 'defaultInputSelect',
    value: function defaultInputSelect(input, value, completion) {
      // https://html.spec.whatwg.org/multipage/forms.html#do-not-apply
      switch (input.type) {
        case 'text':
        case 'search':
        case 'url':
        case 'tel':
        case 'password':
          // istanbul ignore else
          if (input.setSelectionRange) {
            input.setSelectionRange(value.length, completion.length);
          } else if (input.createTextRange) {
            // old IE
            var range = input.createTextRange();
            range.moveEnd('character', completion.length);
            range.moveStart('character', value.length);
            range.select();
          }
      }
    }
  }]);

  function Autosuggest(props) {
    var _ref;

    _classCallCheck(this, Autosuggest);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    /* istanbul ignore next: https://github.com/gotwarlost/istanbul/issues/690#issuecomment-265718617 */
    var _this = _possibleConstructorReturn(this, (_ref = Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call.apply(_ref, [this, props].concat(_toConsumableArray(args))));

    _this._itemAdapter = props.itemAdapter || new _ItemAdapter2['default']();
    _this._itemAdapter.receiveProps(props);

    _this._listAdapter = props.datalistAdapter || _this._getListAdapter(props.datalist);
    _this._listAdapter.receiveProps(props, _this._itemAdapter);

    var _this$_getValueFromPr = _this._getValueFromProps(props),
        inputValue = _this$_getValueFromPr.inputValue,
        inputItem = _this$_getValueFromPr.inputItem,
        inputItemEphemeral = _this$_getValueFromPr.inputItemEphemeral,
        selectedItems = _this$_getValueFromPr.selectedItems;

    _this._setValueMeta(inputItem, inputItemEphemeral, true, true);
    _this._lastValidItem = inputItem;
    _this._lastValidValue = inputValue;
    _this._keyPressCount = 0;

    _this.state = {
      open: false,
      disableFilter: false,
      inputValue: inputValue,
      inputValueKeyPress: 0,
      inputFocused: false,
      selectedItems: selectedItems,
      searchValue: null
    };
    _this._lastOnChangeValue = _this._getCurrentValue();
    _this._lastOnSelectValue = inputItem;

    var self = _this; // https://github.com/facebook/flow/issues/1517
    self._renderSelected = _this._renderSelected.bind(_this);
    self._getItemKey = _this._getItemKey.bind(_this);
    self._isSelectedItem = _this._isSelectedItem.bind(_this);
    self._renderSuggested = _this._renderSuggested.bind(_this);
    self._handleToggleClick = _this._handleToggleClick.bind(_this);
    self._handleInputChange = _this._handleInputChange.bind(_this);
    self._handleItemSelect = _this._handleItemSelect.bind(_this);
    self._removeItem = _this._removeItem.bind(_this);
    self._handleShowAll = _this._handleShowAll.bind(_this);
    self._handleKeyDown = _this._handleKeyDown.bind(_this);
    self._handleKeyPress = _this._handleKeyPress.bind(_this);
    self._handleMenuClose = _this._handleMenuClose.bind(_this);
    self._handleInputFocus = _this._handleInputFocus.bind(_this);
    self._handleInputBlur = _this._handleInputBlur.bind(_this);
    self._handleFocus = _this._handleFocus.bind(_this);
    self._handleBlur = _this._handleBlur.bind(_this);
    return _this;
  }

  _createClass(Autosuggest, [{
    key: '_getListAdapter',
    value: function _getListAdapter(list) {
      if (list == null) {
        return new _EmptyListAdapter2['default']();
      } else if (Array.isArray(list)) {
        return new _ArrayListAdapter2['default']();
      } else if (list instanceof Map) {
        return new _MapListAdapter2['default']();
      } else if (typeof list === 'object') {
        return new _ObjectListAdapter2['default']();
      } else {
        throw Error('Unexpected datalist type: datalistAdapter required');
      }
    }
  }, {
    key: '_getValueFromProps',
    value: function _getValueFromProps(props) {
      var inputValue = '';
      var inputItem = null;
      var inputItemEphemeral = false;
      var selectedItems = [];
      var value = props.value || props.defaultValue;
      if (value != null) {
        if (props.multiple) {
          if (Array.isArray(value)) {
            selectedItems = this._filterItems(value, props);
          } else {
             true ? (0, _warning2['default'])(!value, 'Array expected for value property') : void 0;
          }
        } else if (props.valueIsItem) {
          var itemValue = this._itemAdapter.getInputValue(value);
          if (props.datalist != null) {
            inputItem = this._listAdapter.findMatching(props.datalist, itemValue);
            if (inputItem != null) {
              inputValue = inputItem === value ? itemValue : this._itemAdapter.getInputValue(inputItem);
            } else if (props.datalistOnly && !props.datalistPartial) {
              this._warnInvalidValue(value);
            } else {
              inputValue = itemValue;
              inputItem = value;
            }
          } else {
            inputValue = itemValue;
            inputItem = value;
          }
        } else if (value) {
          if (props.datalist != null) {
            inputItem = this._listAdapter.findMatching(props.datalist, value);
            if (inputItem != null) {
              inputValue = this._itemAdapter.getInputValue(inputItem);
            } else if (props.datalistOnly && !props.datalistPartial) {
              this._warnInvalidValue(value);
            } else {
              inputValue = value.toString();
              inputItem = this._itemAdapter.newFromValue(value);
              inputItemEphemeral = true;
            }
          } else {
            inputValue = value.toString();
            inputItem = this._itemAdapter.newFromValue(value);
            inputItemEphemeral = true;
          }
        }
      }
      return { inputValue: inputValue, inputItem: inputItem, inputItemEphemeral: inputItemEphemeral, selectedItems: selectedItems };
    }
  }, {
    key: '_filterItems',
    value: function _filterItems(items, props) {
      if (props.datalist != null || !props.allowDuplicates) {
        var result = [];
        var valueSet = {};
        var different = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _item = _step.value;

            var _value = this._itemAdapter.getInputValue(_item);
            if (!props.allowDuplicates && valueSet[_value]) {
              different = true;
              continue;
            }
            var listItem = this._listAdapter.findMatching(props.datalist, _value);
            if (listItem != null) {
              result.push(listItem);
              valueSet[_value] = true;
              different = true;
            } else if (props.datalistOnly && !props.datalistPartial) {
              this._warnInvalidValue(_value);
              different = true;
            } else {
              result.push(_item);
              valueSet[_value] = true;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (different) {
          return result;
        }
      }
      return items;
    }
  }, {
    key: '_warnInvalidValue',
    value: function _warnInvalidValue(value) {
       true ? (0, _warning2['default'])(false, 'Value "%s" does not match any datalist value', value) : void 0;
    }
  }, {
    key: '_setInputValue',
    value: function _setInputValue(value, callback) {
      // track keypress count in state so re-render is forced even if value is
      // unchanged; this is necessary when typing over the autocompleted range
      // with matching characters to properly maintain the input selection range
      this.setState({
        inputValue: value,
        inputValueKeyPress: this._keyPressCount
      }, callback);
    }
  }, {
    key: '_setValueMeta',
    value: function _setValueMeta(inputItem) {
      var inputItemEphemeral = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var isValid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : inputItem != null;
      var validated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : isValid;

      this._inputItem = inputItem;
      this._inputItemEphemeral = inputItemEphemeral;
      this._valueIsValid = isValid;
      this._valueWasValidated = validated;
    }
  }, {
    key: '_clearInput',
    value: function _clearInput() {
      this._setValueMeta(null, false, true, true);
      this._setInputValue('');
    }
  }, {
    key: '_getValueUsing',
    value: function _getValueUsing(props, inputValue, inputItem, selectedItems) {
      return props.multiple ? selectedItems : props.valueIsItem ? inputItem : inputValue;
    }
  }, {
    key: '_getCurrentValue',
    value: function _getCurrentValue() {
      return this._getValueUsing(this.props, this.state.inputValue, this._inputItem, this.state.selectedItems);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // IE8 can jump cursor position if not immediately updated to typed value;
      // for other browsers, we can avoid re-rendering for the auto-complete
      this._autoCompleteAfterRender = !this.refs.input.setSelectionRange;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.itemAdapter != this.props.itemAdapter) {
        this._itemAdapter = nextProps.itemAdapter || new _ItemAdapter2['default']();
      }
      this._itemAdapter.receiveProps(nextProps);

      if (nextProps.datalist != this.props.datalist || nextProps.datalistAdapter != this.props.datalistAdapter) {
        if (nextProps.datalistAdapter) {
          this._listAdapter = nextProps.datalistAdapter;
        } else {
          var listAdapter = this._getListAdapter(nextProps.datalist);
          if (listAdapter.constructor != this._listAdapter.constructor) {
            this._listAdapter = listAdapter;
          }
        }
      }
      this._listAdapter.receiveProps(nextProps, this._itemAdapter);

      // if props.value changes (to a value other than the current state), or
      // validation changes to make state invalid, propagate props.value to state
      var nextValue = nextProps.value;
      var inputValue = this.state.inputValue;

      var valueChanged = nextValue !== this.props.value && nextValue !== this._getValueUsing(nextProps, inputValue, this._inputItem, this.state.selectedItems);
      var inputItem = void 0,
          inputValueInvalid = void 0,
          propsValueInvalid = void 0,
          validateSelected = void 0;
      if (!valueChanged) {
        if (nextProps.datalistOnly) {
          var canValidate = !nextProps.datalistPartial && nextProps.datalist != null;
          var validationChanged = !this.props.datalistOnly || !nextProps.datalistPartial && this.props.datalistPartial || nextProps.datalist != this.props.datalist;
          if (inputValue) {
            inputItem = this._listAdapter.findMatching(nextProps.datalist, inputValue);
            if (inputItem == null) {
              if (!canValidate && !this._inputItemEphemeral) {
                inputItem = this._inputItem;
              } else if (this._inputItemEphemeral && nextValue === inputValue) {
                propsValueInvalid = true;
              }
            }
            inputValueInvalid = inputItem == null && validationChanged;
            // update metadata but don't reset input value if invalid but focused
            if (inputValueInvalid && this._focused) {
              this._setValueMeta(null, false, false, true);
              if (validationChanged && canValidate && this._lastValidItem != null) {
                // revalidate last valid item, which will be restored on blur
                this._lastValidItem = this._listAdapter.findMatching(nextProps.datalist, this._lastValidValue);
                if (this._lastValidItem == null) {
                  this._lastValidValue = '';
                }
              }
              inputValueInvalid = false;
            }
          } else {
            inputItem = null;
            inputValueInvalid = false;
          }
          validateSelected = nextProps.multiple && canValidate && validationChanged;
        }
        if (nextProps.multiple && !nextProps.allowDuplicates && this.props.allowDuplicates) {
          validateSelected = true;
        }
      }
      // inputValueInvalid implies !multiple, since inputValue of multiple should
      // be blank when not focused
      if (valueChanged || inputValueInvalid) {
        var inputItemEphemeral = void 0,
            _selectedItems = void 0;
        if (propsValueInvalid) {
          inputValue = '';
          inputItemEphemeral = false;
          _selectedItems = [];
        } else {
          var _getValueFromProps2 = this._getValueFromProps(nextProps);

          inputValue = _getValueFromProps2.inputValue;
          inputItem = _getValueFromProps2.inputItem;
          inputItemEphemeral = _getValueFromProps2.inputItemEphemeral;
          _selectedItems = _getValueFromProps2.selectedItems;
        }
        // if props.value change resolved to current state item, don't reset input
        if (inputItem !== this._inputItem || !this._focused) {
          this._setValueMeta(inputItem, inputItemEphemeral, true, true);
          this._setInputValue(inputValue);
          this.setState({ selectedItems: _selectedItems });
          validateSelected = false;
          this._lastValidItem = inputItem;
          this._lastValidValue = inputValue;
          // suppress onChange (but not onSelect) if value came from props
          if (valueChanged) {
            this._lastOnChangeValue = this._getValueUsing(nextProps, inputValue, inputItem, _selectedItems);
          }
        } else if (valueChanged && nextProps.multiple) {
          this.setState({ selectedItems: _selectedItems });
        }
      } else if (inputValue && nextProps.datalist != this.props.datalist && this._focused) {
        // if datalist changed but value didn't, attempt to autocomplete
        this._checkAutoComplete(inputValue, nextProps);
      }
      if (validateSelected) {
        var _selectedItems2 = this._filterItems(this.state.selectedItems, nextProps);
        this.setState({ selectedItems: _selectedItems2 });
      }

      // open dropdown if datalist message is set while focused
      if (nextProps.datalistMessage && nextProps.datalistMessage != this.props.datalistMessage && this._focused) {
        this._open('message', nextProps);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var suggestions = this.refs.suggestions;

      this._menuFocusedBeforeUpdate = suggestions && suggestions.isFocused();

      var nextInputValue = nextState.inputValue;
      if (nextInputValue != this.state.inputValue) {
        var inputItem = void 0,
            inputItemEphemeral = void 0,
            isValid = void 0;
        if (!this._valueWasValidated) {
          if (nextInputValue) {
            inputItem = this._listAdapter.findMatching(nextProps.datalist, nextInputValue);
            if (inputItem == null && !nextProps.datalistOnly) {
              inputItem = this._itemAdapter.newFromValue(nextInputValue);
              inputItemEphemeral = true;
              isValid = true;
            } else {
              inputItemEphemeral = false;
              isValid = inputItem != null;
            }
          } else {
            inputItem = null;
            inputItemEphemeral = false;
            isValid = !nextProps.required;
          }
          this._setValueMeta(inputItem, inputItemEphemeral, isValid);
        } else {
          inputItem = this._inputItem;
          isValid = this._valueIsValid;
        }
        if (isValid) {
          this._lastValidItem = inputItem;
          this._lastValidValue = inputItem && !inputItemEphemeral ? this._itemAdapter.getInputValue(inputItem) : nextInputValue;
        }

        if (isValid) {
          var _multiple = nextProps.multiple,
              _onChange = nextProps.onChange;

          if (!_multiple && _onChange) {
            var _value2 = this._getValueUsing(nextProps, nextInputValue, inputItem, nextState.selectedItems);
            if (_value2 !== this._lastOnChangeValue) {
              this._lastOnChangeValue = _value2;
              _onChange(_value2);
            }
          }

          var _onSelect = nextProps.onSelect;

          if (_onSelect && inputItem !== this._lastOnSelectValue) {
            this._lastOnSelectValue = inputItem;
            _onSelect(inputItem);
          }
        }
      }

      var onToggle = nextProps.onToggle;

      if (onToggle && nextState.open != this.state.open) {
        onToggle(nextState.open);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.open && !prevState.open && this._lastOpenEventType === 'keydown' || this.state.disableFilter && !prevState.disableFilter && this._menuFocusedBeforeUpdate) {
        this.refs.suggestions.focusFirst();
      } else if (!this.state.open && prevState.open) {
        // closed
        if (this._menuFocusedBeforeUpdate) {
          this._menuFocusedBeforeUpdate = false;
          this._focusInput();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._focusTimeoutId);
      this._focusTimeoutId = null;
      clearTimeout(this._searchTimeoutId);
      this._searchTimeoutId = null;
    }
  }, {
    key: '_focusInput',
    value: function _focusInput() {
      var input = _reactDom2['default'].findDOMNode(this.refs.input);
      // istanbul ignore else
      if (input instanceof HTMLElement) {
        input.focus();
      }
    }
  }, {
    key: '_open',
    value: function _open(eventType, props) {
      this._lastOpenEventType = eventType;
      var disableFilter = eventType !== 'autocomplete' && this._hasNoOrExactMatch(props);
      this.setState({ open: true, disableFilter: disableFilter });

      var onSearch = props.onSearch;
      var _state = this.state,
          inputValue = _state.inputValue,
          searchValue = _state.searchValue;

      if (onSearch && searchValue !== inputValue) {
        this.setState({ searchValue: inputValue });
        onSearch(inputValue);
      }
    }
  }, {
    key: '_close',
    value: function _close() {
      this.setState({ open: false });
    }
  }, {
    key: '_toggleOpen',
    value: function _toggleOpen(eventType, props) {
      if (this.state.open) {
        this._close();
      } else {
        this._open(eventType, props);
      }
    }
  }, {
    key: '_canOpen',
    value: function _canOpen() {
      var datalist = this.props.datalist;

      return datalist == null && this.props.onSearch || !this._listAdapter.isEmpty(datalist) || !!this.props.datalistMessage;
    }
  }, {
    key: '_hasNoOrExactMatch',
    value: function _hasNoOrExactMatch(props) {
      var _this2 = this;

      if (this._inputItem != null && !this._inputItemEphemeral) {
        return true; // exact match
      }
      var foldedValue = this._itemAdapter.foldValue(this.state.inputValue);
      return this._listAdapter.find(props.datalist, function (item) {
        return _this2._itemAdapter.itemIncludedByInput(item, foldedValue);
      }) == null;
    }
  }, {
    key: 'render',
    value: function render() {
      var showToggle = this.props.showToggle;

      var toggleCanOpen = this._canOpen();
      var toggleVisible = showToggle === 'auto' ? toggleCanOpen : showToggle;
      var classes = {
        autosuggest: true,
        open: this.state.open,
        disabled: this.props.disabled,
        dropdown: toggleVisible && !this.props.dropup,
        dropup: toggleVisible && this.props.dropup
      };
      return _react2['default'].createElement(
        'div',
        {
          key: 'dropdown',
          className: (0, _classnames2['default'])(classes),
          onFocus: this._handleFocus,
          onBlur: this._handleBlur },
        this._renderInputGroup(toggleVisible, toggleCanOpen),
        this._renderMenu()
      );
    }
  }, {
    key: '_renderInputGroup',
    value: function _renderInputGroup(toggleVisible, toggleCanOpen) {
      var addonBefore = this.props.addonBefore ? _react2['default'].createElement(
        'span',
        { className: 'input-group-addon', key: 'addonBefore' },
        this.props.addonBefore
      ) : null;

      var addonAfter = this.props.addonAfter ? _react2['default'].createElement(
        'span',
        { className: 'input-group-addon', key: 'addonAfter' },
        this.props.addonAfter
      ) : null;

      var buttonBefore = this.props.buttonBefore ? _react2['default'].createElement(
        'span',
        { className: 'input-group-btn' },
        this.props.buttonBefore
      ) : null;

      // Bootstrap expects the dropdown toggle to be last,
      // as it does not reset the right border radius for toggles:
      // .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle)
      // { @include border-right-radius(0); }
      var toggle = toggleVisible && this._renderToggle(toggleCanOpen);
      var buttonAfter = toggle || this.props.buttonAfter ? _react2['default'].createElement(
        'span',
        { className: 'input-group-btn' },
        this.props.buttonAfter,
        toggle
      ) : null;

      var classes = (0, _classnames2['default'])({
        'input-group': addonBefore || addonAfter || buttonBefore || buttonAfter,
        'input-group-sm': this.props.bsSize === 'small',
        'input-group-lg': this.props.bsSize === 'large',
        'input-group-toggle': !!toggle
      });
      return classes ? _react2['default'].createElement(
        'div',
        { className: classes, key: 'input-group' },
        addonBefore,
        buttonBefore,
        this._renderChoices(),
        addonAfter,
        buttonAfter
      ) : this._renderChoices();
    }
  }, {
    key: '_renderToggle',
    value: function _renderToggle(canOpen) {
      return _react2['default'].createElement(_reactBootstrap.Dropdown.Toggle, {
        ref: 'toggle',
        key: 'toggle',
        id: this.props.toggleId,
        bsSize: this.props.bsSize,
        disabled: this.props.disabled || !canOpen,
        open: this.state.open,
        onClick: this._handleToggleClick,
        onKeyDown: this._handleKeyDown });
    }
  }, {
    key: '_renderChoices',
    value: function _renderChoices() {
      if (this.props.multiple) {
        var _props$choicesClass = this.props.choicesClass,
            ChoicesClass = _props$choicesClass === undefined ? _Choices2['default'] : _props$choicesClass;

        return _react2['default'].createElement(
          ChoicesClass,
          { ref: 'choices',
            autoHeight: !this.props.showToggle && !this.props.addonAfter && !this.props.addonBefore && !this.props.buttonAfter && !this.props.buttonBefore,
            disabled: this.props.disabled,
            focused: this.state.inputFocused,
            inputValue: this.state.inputValue,
            items: this.state.selectedItems,
            onKeyPress: this._handleKeyPress,
            onRemove: this._removeItem,
            renderItem: this._renderSelected },
          this._renderInput()
        );
      }
      return this._renderInput();
    }

    // autobind

  }, {
    key: '_renderSelected',
    value: function _renderSelected(item) {
      return this._itemAdapter.renderSelected(item);
    }
  }, {
    key: '_renderInput',
    value: function _renderInput() {
      var formGroup = this.context.$bs_formGroup;
      var controlId = formGroup && formGroup.controlId;
      var extraProps = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(this.props)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          if (!Autosuggest.propTypes[key]) {
            extraProps[key] = this.props[key];
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var noneSelected = !this.props.multiple || !this.state.selectedItems.length;
      // set autoComplete off to avoid a redundant browser drop-down menu,
      // but allow it to be overridden by extra props for auto-fill purposes
      return _react2['default'].createElement('input', _extends({
        autoComplete: 'off'
      }, extraProps, {
        className: (0, _classnames2['default'])(this.props.className, { 'form-control': !this.props.multiple }),
        ref: 'input',
        key: 'input',
        id: controlId,
        disabled: this.props.disabled,
        required: this.props.required && noneSelected,
        placeholder: noneSelected ? this.props.placeholder : undefined,
        type: this.props.type,
        value: this.state.inputValue,
        onChange: this._handleInputChange,
        onKeyDown: this._handleKeyDown,
        onKeyPress: this._handleKeyPress,
        onFocus: this._handleInputFocus,
        onBlur: this._handleInputBlur }));
    }
  }, {
    key: '_renderMenu',
    value: function _renderMenu() {
      var _this3 = this;

      this._pseudofocusedItem = null;
      var open = this.state.open;

      if (!open) {
        return null;
      }
      var datalist = this.props.datalist;

      var foldedValue = this._itemAdapter.foldValue(this.state.inputValue);
      this._foldedInputValue = foldedValue;
      var items = void 0;
      if (this.state.disableFilter) {
        items = this._listAdapter.toArray(datalist);
      } else {
        items = this._listAdapter.filter(datalist, function (item) {
          return _this3._itemAdapter.itemIncludedByInput(item, foldedValue) && _this3._allowItem(item);
        });
      }
      items = this._itemAdapter.sortItems(items, foldedValue);
      var filtered = items.length < this._listAdapter.getLength(datalist);
      // visually indicate that first item will be selected if Enter is pressed
      // while the input element is focused (unless multiple and not datalist-only)
      var focusedIndex = void 0;
      if (items.length > 0 && this.state.inputFocused && (!this.props.multiple || this.props.datalistOnly)) {
        this._pseudofocusedItem = items[focusedIndex = 0];
      }
      var _props = this.props,
          _props$suggestionsCla = _props.suggestionsClass,
          SuggestionsClass = _props$suggestionsCla === undefined ? _Suggestions2['default'] : _props$suggestionsCla,
          datalistMessage = _props.datalistMessage,
          onDatalistMessageSelect = _props.onDatalistMessageSelect,
          toggleId = _props.toggleId;

      return _react2['default'].createElement(SuggestionsClass, { ref: 'suggestions',
        datalistMessage: datalistMessage,
        filtered: filtered,
        focusedIndex: focusedIndex,
        getItemKey: this._getItemKey,
        isSelectedItem: this._isSelectedItem,
        items: items,
        labelledBy: toggleId,
        onClose: this._handleMenuClose,
        onDatalistMessageSelect: onDatalistMessageSelect,
        onDisableFilter: this._handleShowAll,
        onSelect: this._handleItemSelect,
        open: open,
        renderItem: this._renderSuggested });
    }
  }, {
    key: '_allowItem',
    value: function _allowItem(item) {
      var _this4 = this;

      if (this.props.allowDuplicates) {
        return true;
      }
      var value = this._itemAdapter.getInputValue(item);
      return !this.state.selectedItems.find(function (i) {
        return _this4._itemAdapter.getInputValue(i) === value;
      });
    }

    // autobind

  }, {
    key: '_getItemKey',
    value: function _getItemKey(item) {
      return this._itemAdapter.getReactKey(item);
    }

    // autobind

  }, {
    key: '_isSelectedItem',
    value: function _isSelectedItem(item) {
      return this._itemAdapter.itemMatchesInput(item, this._foldedInputValue);
    }

    // autobind

  }, {
    key: '_renderSuggested',
    value: function _renderSuggested(item) {
      return this._itemAdapter.renderSuggested(item);
    }

    // autobind

  }, {
    key: '_handleToggleClick',
    value: function _handleToggleClick() {
      this._toggleOpen('click', this.props);
    }

    // autobind

  }, {
    key: '_handleInputChange',
    value: function _handleInputChange(event) {
      var _this5 = this;

      var _ref2 = event.target,
          value = _ref2.value;
      // prevent auto-complete on backspace/delete/copy/paste/etc.

      var allowAutoComplete = this._keyPressCount > this.state.inputValueKeyPress;
      if (allowAutoComplete && value) {
        if (this._autoCompleteAfterRender) {
          this._setValueMeta();
          this._setInputValue(value, function () {
            _this5._checkAutoComplete(value, _this5.props);
          });
        } else if (!this._checkAutoComplete(value, this.props)) {
          this._setValueMeta();
          this._setInputValue(value);
        }
      } else {
        this._setValueMeta();
        this._setInputValue(value);
      }

      // suppress onSearch if can't auto-complete and not open
      if (allowAutoComplete || this.state.open) {
        var _onSearch = this.props.onSearch;

        if (_onSearch) {
          clearTimeout(this._searchTimeoutId);
          this._searchTimeoutId = setTimeout(function () {
            _this5._searchTimeoutId = null;
            if (value != _this5.state.searchValue) {
              _this5.setState({ searchValue: value });
              _onSearch(value);
            }
          }, this.props.searchDebounce);
        }
      }
    }
  }, {
    key: '_checkAutoComplete',
    value: function _checkAutoComplete(value, props) {
      var _this6 = this;

      // open dropdown if any items would be included
      var valueUpdated = false;
      var datalist = props.datalist;

      var foldedValue = this._itemAdapter.foldValue(value);
      var includedItems = this._listAdapter.filter(datalist, function (i) {
        return _this6._itemAdapter.itemIncludedByInput(i, foldedValue) && _this6._allowItem(i);
      });
      if (includedItems.length > 0) {
        // if only one item is included and the value must come from the list,
        // autocomplete using that item
        var _datalistOnly = props.datalistOnly,
            _datalistPartial = props.datalistPartial;

        if (includedItems.length === 1 && _datalistOnly && !_datalistPartial) {
          var found = includedItems[0];
          var foundValue = this._itemAdapter.getInputValue(found);
          var callback = void 0;
          var _inputSelect = props.inputSelect;

          if (value != foundValue && _inputSelect && this._itemAdapter.foldValue(foundValue).startsWith(foldedValue)) {
            var _input = this.refs.input;
            callback = function callback() {
              _inputSelect(_input, value, foundValue);
            };
          }
          this._setValueMeta(found);
          this._setInputValue(foundValue, callback);
          valueUpdated = true;
          if (this.state.open ? props.closeOnCompletion : value != foundValue && !props.closeOnCompletion) {
            this._toggleOpen('autocomplete', props);
          }
        } else {
          // otherwise, just check if any values match, and select the first one
          // (without modifying the input value)
          var _found = includedItems.find(function (i) {
            return _this6._itemAdapter.itemMatchesInput(i, foldedValue);
          });
          if (_found) {
            this._setValueMeta(_found);
            this._setInputValue(value);
            valueUpdated = true;
          }
          // open dropdown unless exactly one matching value was found
          if (!this.state.open && (!_found || includedItems.length > 1)) {
            this._open('autocomplete', props);
          }
        }
      }
      return valueUpdated;
    }

    // autobind

  }, {
    key: '_handleItemSelect',
    value: function _handleItemSelect(item) {
      if (this.props.multiple) {
        this._addItem(item);
      } else {
        var itemValue = this._itemAdapter.getInputValue(item);
        this._setValueMeta(item);
        this._setInputValue(itemValue);
      }
      this._close();
    }
  }, {
    key: '_addItem',
    value: function _addItem(item) {
      if (this._allowItem(item)) {
        var _selectedItems3 = [].concat(_toConsumableArray(this.state.selectedItems), [item]);
        this.setState({ selectedItems: _selectedItems3 });
        var _props2 = this.props,
            _onAdd = _props2.onAdd,
            _onChange2 = _props2.onChange;

        if (_onAdd) {
          _onAdd(item);
        }
        if (_onChange2) {
          _onChange2(_selectedItems3);
        }
      }
      this._clearInput();
      if (this.state.open) {
        this._close();
      }
    }

    // autobind

  }, {
    key: '_removeItem',
    value: function _removeItem(index) {
      var previousItems = this.state.selectedItems;
      var selectedItems = previousItems.slice(0, index).concat(previousItems.slice(index + 1));
      this.setState({ selectedItems: selectedItems });
      var _props3 = this.props,
          onRemove = _props3.onRemove,
          onChange = _props3.onChange;

      if (onRemove) {
        onRemove(index);
      }
      if (onChange) {
        onChange(selectedItems);
      }
    }
  }, {
    key: '_addInputValue',
    value: function _addInputValue() {
      if (this._inputItem) {
        this._addItem(this._inputItem);
        return true;
      }
      return false;
    }

    // autobind

  }, {
    key: '_handleShowAll',
    value: function _handleShowAll() {
      this.setState({ disableFilter: true });
    }

    // autobind

  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(event) {
      if (this.props.disabled) return;

      switch (event.keyCode || event.which) {
        case _keycode2['default'].codes.down:
        case _keycode2['default'].codes['page down']:
          if (this.state.open) {
            this.refs.suggestions.focusFirst();
          } else if (this._canOpen()) {
            this._open('keydown', this.props);
          }
          event.preventDefault();
          break;
        case _keycode2['default'].codes.left:
        case _keycode2['default'].codes.backspace:
          if (this.refs.choices && this.refs.input && this._getCursorPosition(this.refs.input) === 0) {
            this.refs.choices.focusLast();
            event.preventDefault();
          }
          break;
        case _keycode2['default'].codes.right:
          if (this.refs.choices && this.refs.input && this._getCursorPosition(this.refs.input) === this.state.inputValue.length) {
            this.refs.choices.focusFirst();
            event.preventDefault();
          }
          break;
        case _keycode2['default'].codes.enter:
          if (this.props.multiple && this.state.inputValue) {
            event.preventDefault();
            if (this._addInputValue()) {
              break;
            }
          }
          if (this.state.open && this.state.inputFocused) {
            event.preventDefault();
            if (this._pseudofocusedItem) {
              this._handleItemSelect(this._pseudofocusedItem);
            } else {
              this._close();
            }
          }
          break;
        case _keycode2['default'].codes.esc:
        case _keycode2['default'].codes.tab:
          this._handleMenuClose(event);
          break;
      }
    }
  }, {
    key: '_getCursorPosition',
    value: function _getCursorPosition(input) {
      var inputNode = _reactDom2['default'].findDOMNode(input);
      // istanbul ignore else
      if (inputNode instanceof HTMLInputElement) {
        return inputNode.selectionStart;
      }
    }

    // autobind

  }, {
    key: '_handleKeyPress',
    value: function _handleKeyPress() {
      ++this._keyPressCount;
    }

    // autobind

  }, {
    key: '_handleMenuClose',
    value: function _handleMenuClose() {
      if (this.state.open) {
        this._close();
      }
    }

    // autobind

  }, {
    key: '_handleInputFocus',
    value: function _handleInputFocus() {
      this.setState({ inputFocused: true });
    }

    // autobind

  }, {
    key: '_handleInputBlur',
    value: function _handleInputBlur() {
      this.setState({ inputFocused: false });
    }

    // autobind

  }, {
    key: '_handleFocus',
    value: function _handleFocus() {
      if (this._focusTimeoutId) {
        clearTimeout(this._focusTimeoutId);
        this._focusTimeoutId = null;
      } else {
        this._focused = true;
        var _onFocus = this.props.onFocus;

        if (_onFocus) {
          var _value3 = this._getCurrentValue();
          _onFocus(_value3);
        }
      }
    }

    // autobind

  }, {
    key: '_handleBlur',
    value: function _handleBlur(event) {
      var _this7 = this;

      console.log('event.relatedTarget = ' + event.relatedTarget);
      this._focusTimeoutId = setTimeout(function () {
        _this7._focusTimeoutId = null;
        _this7._focused = false;
        var inputValue = _this7.state.inputValue;
        var onBlur = _this7.props.onBlur;

        if (_this7.props.multiple) {
          if (inputValue && !_this7._addInputValue()) {
            _this7._clearInput();
          }
        } else if (inputValue != _this7._lastValidValue) {
          // invoke onBlur after state change, rather than immediately
          var callback = void 0;
          if (onBlur) {
            callback = function callback() {
              var value = _this7._getCurrentValue();
              onBlur(value);
            };
          }
          // restore last valid value/item
          _this7._setValueMeta(_this7._lastValidItem, false, true, true);
          _this7._setInputValue(_this7._lastValidValue, callback);
          return;
        }
        if (onBlur) {
          var _value4 = _this7._getCurrentValue();
          onBlur(_value4);
        }
      }, 1);
    }
  }]);

  return Autosuggest;
}(_react2['default'].Component);

Autosuggest.propTypes = {
  /**
   * Text or component appearing in the input group after the input element
   * (and before any button specified in `buttonAfter`).
   */
  addonAfter: _propTypes2['default'].node,
  /**
    * Text or component appearing in the input group before the input element
    * (and before any button specified in `buttonBefore`).
    */
  addonBefore: _propTypes2['default'].node,
  /**
   * Indicates whether duplicate values are allowed in `multiple` mode.
   */
  allowDuplicates: _propTypes2['default'].bool,
  /**
   * Specifies the size of the form group and its contained components.
   * Leave undefined for normal/medium size.
   */
  bsSize: _propTypes2['default'].oneOf(['small', 'large']),
  /**
   * Button component appearing in the input group after the input element
   * (and after any add-on specified in `addonAfter`).
   */
  buttonAfter: _propTypes2['default'].node,
  /**
   * Button component appearing in the input group before the input element
   * (and after any add-on specified in `addonBefore`).
   */
  buttonBefore: _propTypes2['default'].node,
  /**
   * React component class used to render the selected items in multiple mode.
   */
  choicesClass: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].string]),
  /**
   * Indicates whether the drop-down menu should be closed automatically when
   * auto-completion occurs. By default, the menu will remain open, so the
   * user can see any additional information about the selected item (such as
   * a shorthand code that caused it to be selected).
   */
  closeOnCompletion: _propTypes2['default'].bool,
  /**
   * A collection of items (such as an array, object, or Map) used as
   * auto-complete suggestions. Each item may have any type supported by the
   * `itemAdapter`. The default item adapter has basic support for any
   * non-null type: it will initially try to access item properties using the
   * configured property names (`itemReactKeyPropName`, `itemSortKeyPropName`,
   * and `itemValuePropName`), but will fall back to using the `toString`
   * method to obtain these properties to support primitives and other object
   * types.
   *
   * If `datalist` is undefined or null and `onSearch` is not, the datalist
   * is assumed to be dynamically populated, and the drop-down toggle will be
   * enabled and will trigger `onSearch` the first time it is clicked.
   * Conversely, an empty `datalist` or undefined/null `onSearch` indicates
   * that there are no auto-complete options.
   */
  datalist: _propTypes2['default'].any,
  /**
   * An instance of the ListAdapter class that provides datalist access
   * methods required by this component.
   */
  datalistAdapter: _propTypes2['default'].object,
  /**
   * Message to be displayed at the end of the datalist. It can be used to
   * indicate that data is being fetched asynchronously, that an error
   * occurred fetching data, or that additional options can be requested.
   * It behaves similarly to a menu item, except that it is not filtered or
   * sorted and cannot be selected (except to invoke `onDatalistMessageSelect`).
   * Changing this property to a different non-null value while the component
   * is focused causes the drop-down menu to be opened, which is useful for
   * reporting status, such as that options are being fetched or failed to be
   * fetched.
   */
  datalistMessage: _propTypes2['default'].node,
  /**
   * Indicates that only values matching an item from the `datalist` property
   * are considered valid. For search purposes, intermediate values of the
   * underlying `input` element may not match while the component is focused,
   * but any non-matching value will be replaced with the previous matching
   * value when the component loses focus.
   *
   * Note that there are two cases where the current (valid) value may not
   * correspond to an item in the datalist:
   *
   * - If the value was provided by the `value` or `defaultValue` property
   *   and either `datalist` is undefined/null (as opposed to empty) or
   *   `datalistPartial` is true, the value is assumed to be valid.
   * - If `datalist` changes and `datalistPartial` is true, any previously
   *   valid value is assumed to remain valid. (Conversely, if `datalist`
   *   changes and `datalistPartial` is false, a previously valid value will
   *   be invalidated if not in the new `datalist`.)
   */
  datalistOnly: _propTypes2['default'].bool,
  /**
   * Indicates that the `datalist` property should be considered incomplete
   * for validation purposes. Specifically, if both `datalistPartial` and
   * `datalistOnly` are true, changes to the `datalist` will not render
   * invalid a value that was previously valid. This is useful in cases where
   * a partial datalist is obtained dynamically in response to the `onSearch`
   * callback.
   */
  datalistPartial: _propTypes2['default'].bool,
  /**
   * Initial value to be rendered when used as an
   * [uncontrolled component](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)
   * (i.e. no `value` property is supplied).
   */
  defaultValue: _propTypes2['default'].any,
  /**
   * Indicates whether the form group is disabled, which causes all of its
   * contained elements to ignore input and focus events and to be displayed
   * grayed out.
   */
  disabled: _propTypes2['default'].bool,
  /**
   * Indicates whether the suggestion list should drop up instead of down.
   *
   * Note that currently a drop-up list extending past the top of the page is
   * clipped, rendering the clipped items inaccessible, whereas a drop-down
   * list will extend the page and allow scrolling as necessary.
   */
  dropup: _propTypes2['default'].bool,
  /**
   * Custom class name applied to the input group.
   */
  groupClassName: _propTypes2['default'].string,
  /**
   * Function used to select a portion of the input value when auto-completion
   * occurs. The default implementation selects just the auto-completed
   * portion, which is equivalent to:
   *
   * ```js
   *   defaultInputSelect(input, value, completion) {
   *     input.setSelectionRange(value.length, completion.length)
   *   }
   * ```
   */
  inputSelect: _propTypes2['default'].func,
  /**
   * An instance of the ItemAdapter class that provides the item access
   * methods required by this component.
   */
  itemAdapter: _propTypes2['default'].object,
  /**
   * Name of the item property used for the React component key. If this
   * property is not defined, `itemValuePropName` is used instead. If neither
   * property is defined, `toString()` is called on the item.
   */
  itemReactKeyPropName: _propTypes2['default'].string,
  /**
   * Name of the item property used for sorting items. If this property is not
   * defined, `itemValuePropName` is used instead. If neither property is
   * defined, `toString()` is called on the item.
   */
  itemSortKeyPropName: _propTypes2['default'].string,
  /**
   * Name of item property used for the input element value. If this property
   * is not defined, `toString()` is called on the item.
   */
  itemValuePropName: _propTypes2['default'].string,
  /**
   * Enables selection of multiple items. The value property should be an
   * array of items.
   */
  multiple: _propTypes2['default'].bool,
  /**
   * Callback function called whenever a new value should be appended to the
   * array of values in `multiple` mode. The sole argument is the added item.
   */
  onAdd: _propTypes2['default'].func,
  /**
   * Callback function called whenever the input focus leaves this component.
   * The sole argument is current value (see `onChange for details`).
   */
  onBlur: _propTypes2['default'].func,
  /**
   * Callback function called whenever the input value changes to a different
   * valid value. Validity depends on properties such as `datalistOnly`,
   * `valueIsItem`, and `required`. The sole argument is current value:
   *
   * - If `multiple` is enabled, the current value is an array of selected
   *   items.
   * - If `valueIsItem` is enabled, the current value is the selected
   *   datalist item.
   * - Otherwise, the current value is the `input` element value. Note that
   *   if `datalistOnly` or `required` are enabled, only valid values trigger
   *   a callback.
   */
  onChange: _propTypes2['default'].func,
  /**
   * Callback function called whenever the datalist item created for
   * `datalistMessage` is selected. If this property is null, the associated
   * item is displayed as disabled.
   */
  onDatalistMessageSelect: _propTypes2['default'].func,
  /**
   * Callback function called whenever the input focus enters this component.
   * The sole argument is current value (see `onChange for details`).
   */
  onFocus: _propTypes2['default'].func,
  /**
   * Callback function called whenever a value should be removed from the
   * array of values in `multiple` mode. The sole argument is the index of
   * the value to remove.
   */
  onRemove: _propTypes2['default'].func,
  /**
   * Callback function called periodically when the `input` element value has
   * changed. The sole argument is the current value of the `input` element.
   * This callback can be used to dynamically populate the `datalist` based on
   * the input value so far, e.g. with values obtained from a remote service.
   * Once changed, the value must then remain unchanged for `searchDebounce`
   * milliseconds before the function will be called. No two consecutive
   * invocations of the function will be passed the same value (i.e. changing
   * and then restoring the value within the debounce interval is not
   * considered a change). Note also that the callback can be invoked with an
   * empty string, if the user clears the `input` element; this implies that
   * any minimum search string length should be imposed by the function.
   */
  onSearch: _propTypes2['default'].func,
  /**
   * Callback function called whenever an item from the suggestion list is
   * selected (regardless of whether it is clicked or typed). The sole
   * argument is the selected item.
   */
  onSelect: _propTypes2['default'].func,
  /**
   * Callback function called whenever the drop-down list of suggestions is
   * opened or closed. The sole argument is a boolean value indicating whether
   * the list is open.
   */
  onToggle: _propTypes2['default'].func,
  /**
   * Placeholder text propagated to the underlying `input` element (when
   * `multiple` is false or no items have been selected).
   */
  placeholder: _propTypes2['default'].string,
  /**
   * `required` property passed to the `input` element (when `multiple` is
   * false or no items have been selected).
   */
  required: _propTypes2['default'].bool,
  /**
   * The number of milliseconds that must elapse between the last change to
   * the `input` element value and a call to `onSearch`. The default is 250.
   */
  searchDebounce: _propTypes2['default'].number,
  /**
   * Indicates whether to show the drop-down toggle. If set to `auto`, the
   * toggle is shown only when the `datalist` is non-empty or dynamic.
   */
  showToggle: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].oneOf(['auto'])]),
  /**
   * React component class used to render the drop-down list of suggestions.
   */
  suggestionsClass: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].string]),
  /**
   * ID supplied to the drop-down toggle and used by the drop-down menu to
   * refer to it.
   */
  toggleId: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
  /**
   * `type` property supplied to the contained `input` element. Only textual
   * types should be specified, such as `text`, `search`, `email`, `tel`, or
   * perhaps `number`. Note that the browser may supply additional UI elements
   * for some types (e.g. increment/decrement buttons for `number`) that may
   * need additional styling or may interfere with UI elements supplied by
   * this component.
   */
  type: _propTypes2['default'].string,
  /**
   * The value to be rendered by the component. If unspecified, the component
   * behaves like an [uncontrolled component](https://facebook.github.io/react/docs/forms.html#uncontrolled-components).
   */
  value: _propTypes2['default'].any,
  /**
   * Indicates that the `value` property should be interpreted as a datalist
   * item, as opposed to the string value of the underlying `input` element.
   * When false (the default), the `value` property (if specified) is
   * expected to be a string and corresponds (indirectly) to the `value`
   * property of the underlying `input` element. When true, the `value`
   * property is expected to be a datalist item whose display value (as
   * provided by the `itemAdapter`) is used as the `input` element value.
   * This property also determines whether the argument to the `onChange`
   * callback is the `input` value or a datalist item.
   *
   * Note that unless `datalistOnly` is also true, items may also be created
   * dynamically using the `newFromValue` method of the `itemAdapter`.
   *
   * Also note that this property is ignored if `multiple` is true; in that
   * case, the `value` property and `onChange` callback argument are
   * implicitly an array of datalist items.
   */
  valueIsItem: _propTypes2['default'].bool
};
Autosuggest.contextTypes = {
  $bs_formGroup: _propTypes2['default'].object
};
Autosuggest.defaultProps = {
  closeOnCompletion: false,
  datalistOnly: false,
  datalistPartial: false,
  disabled: false,
  dropup: false,
  inputSelect: Autosuggest.defaultInputSelect,
  multiple: false,
  itemReactKeyPropName: 'key',
  itemSortKeyPropName: 'sortKey',
  itemValuePropName: 'value',
  searchDebounce: 250,
  showToggle: 'auto',
  type: 'text',
  valueIsItem: false
};
var _default = Autosuggest;
exports['default'] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Autosuggest, 'Autosuggest', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/Autosuggest.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/murphyke/Documents/code/react-bootstrap-autosuggest/src/Autosuggest.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(11);
  var warning = __webpack_require__(12);
  var ReactPropTypesSecret = __webpack_require__(13);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var warning = __webpack_require__(12);
var assign = __webpack_require__(22);

var ReactPropTypesSecret = __webpack_require__(13);
var checkPropTypes = __webpack_require__(23);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-bootstrap-autosuggest.js.map