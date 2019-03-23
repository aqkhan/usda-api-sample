module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/home/aqkhan/Documents/test/usda-api-react/pages/index.js";


var data = __webpack_require__(/*! ../stub/data-sample.json */ "./stub/data-sample.json");

var leftBaxa = {
  width: '45%',
  float: 'left'
};
var rightBaxa = {
  width: '45%',
  float: 'right'
};

var displayNutrients = function displayNutrients(nutrients) {
  return nutrients.map(function (nutrient, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, nutrient.nutrient), ": ", nutrient.value, " ", nutrient.unit, " / ", nutrient.gm, " gm"));
  });
};

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      searchTerm = _useState2[0],
      updateSearchTerm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      selectedFood = _useState4[0],
      updateSelectedFood = _useState4[1];

  var filterData = searchTerm.length > 2 ? data.report.foods.filter(function (item) {
    return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  }) : [];
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "USDA API"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "API call fetched and stored in JSON file"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Search apple for example"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: leftBaxa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    placeholder: "Search here...",
    onKeyUp: function onKeyUp(e) {
      return updateSearchTerm(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "You searched for: ", searchTerm), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, filterData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: index,
      onClick: function onClick() {
        updateSelectedFood([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedFood), [item]));
        updateSearchTerm('');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.name);
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: rightBaxa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "You've added the following: "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      return updateSelectedFood([]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Clear choices"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, selectedFood.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, item.name)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: index + _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()().toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, displayNutrients(item.nutrients)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./stub/data-sample.json":
/*!*******************************!*\
  !*** ./stub/data-sample.json ***!
  \*******************************/
/*! exports provided: report, default */
/***/ (function(module) {

module.exports = {"report":{"sr":"1","groups":"All groups","subset":"All foods","end":150,"start":0,"total":7524,"foods":[{"ndbno":"09427","name":"Abiyuch, raw","weight":114,"measure":"0.5 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"79","gm":69},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"9.75","gm":8.55},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.11","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"20.06","gm":17.6}]},{"ndbno":"09002","name":"Acerola juice, raw","weight":242,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"56","gm":23},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"10.89","gm":4.5},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.73","gm":0.3},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"11.62","gm":4.8}]},{"ndbno":"09001","name":"Acerola, (west indian cherry), raw","weight":98,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"31","gm":32},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.29","gm":0.3},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"7.54","gm":7.69}]},{"ndbno":"14006","name":"Alcoholic beverage, beer, light","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"9","gm":29},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.03","gm":0.09},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.48","gm":1.64}]},{"ndbno":"14007","name":"Alcoholic beverage, beer, light, BUD LIGHT","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"9","gm":29},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.38","gm":1.3}]},{"ndbno":"14005","name":"Alcoholic beverage, beer, light, BUDWEISER SELECT","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"8","gm":28},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.26","gm":0.87}]},{"ndbno":"14248","name":"Alcoholic beverage, beer, light, higher alcohol","weight":356,"measure":"12.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"164","gm":46},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.32","gm":0.09},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"2.74","gm":0.77}]},{"ndbno":"14013","name":"Alcoholic beverage, beer, light, low carb","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"8","gm":27},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.22","gm":0.73}]},{"ndbno":"14003","name":"Alcoholic beverage, beer, regular, all","weight":29.7,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"13","gm":43},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.05","gm":3.55}]},{"ndbno":"14004","name":"Alcoholic beverage, beer, regular, BUDWEISER","weight":29.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"12","gm":41},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.89","gm":2.97}]},{"ndbno":"14034","name":"Alcoholic beverage, creme de menthe, 72 proof","weight":33.6,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"125","gm":371},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.10","gm":0.3},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"13.98","gm":41.6}]},{"ndbno":"14009","name":"Alcoholic beverage, daiquiri, canned","weight":30.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"38","gm":125},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"4.79","gm":15.7}]},{"ndbno":"14010","name":"Alcoholic beverage, daiquiri, prepared-from-recipe","weight":30.2,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"56","gm":186},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"1.69","gm":5.58},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.02","gm":0.06},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"2.10","gm":6.94}]},{"ndbno":"14533","name":"Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 100 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"82","gm":295},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"--","gm":"--"}]},{"ndbno":"14037","name":"Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 80 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"64","gm":231},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"--","gm":"--"}]},{"ndbno":"14550","name":"Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 86 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"70","gm":250},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.03","gm":0.1}]},{"ndbno":"14551","name":"Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 90 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"73","gm":263},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"--","gm":"--"}]},{"ndbno":"14532","name":"Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 94 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"76","gm":275},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"--","gm":"--"}]},{"ndbno":"14050","name":"Alcoholic beverage, distilled, rum, 80 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"64","gm":231},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"--","gm":"--"}]},{"ndbno":"14051","name":"Alcoholic beverage, distilled, vodka, 80 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"64","gm":231},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"--","gm":"--"}]},{"ndbno":"14052","name":"Alcoholic beverage, distilled, whiskey, 86 proof","weight":27.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"70","gm":250},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.03","gm":0.1}]},{"ndbno":"14415","name":"Alcoholic beverage, liqueur, coffee with cream, 34 proof","weight":31.1,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"102","gm":327},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"6.15","gm":19.76},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"4.88","gm":15.7},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"6.50","gm":20.9}]},{"ndbno":"14414","name":"Alcoholic beverage, liqueur, coffee, 53 proof","weight":34.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"117","gm":336},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"13.33","gm":38.3},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.10","gm":0.3},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"16.29","gm":46.8}]},{"ndbno":"14534","name":"Alcoholic beverage, liqueur, coffee, 63 proof","weight":34.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"107","gm":308},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.10","gm":0.3},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"11.21","gm":32.2}]},{"ndbno":"14239","name":"Alcoholic beverage, malt beer, hard lemonade","weight":335,"measure":"11.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"228","gm":68},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"32.73","gm":9.77},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"33.73","gm":10.07}]},{"ndbno":"14015","name":"Alcoholic beverage, pina colada, canned","weight":32.6,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"77","gm":237},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"2.48","gm":7.6},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"9.00","gm":27.6}]},{"ndbno":"14017","name":"Alcoholic beverage, pina colada, prepared-from-recipe","weight":31.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"55","gm":174},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"7.01","gm":22.33},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.59","gm":1.88},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"7.12","gm":22.66}]},{"ndbno":"43479","name":"Alcoholic beverage, rice (sake)","weight":29.1,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"39","gm":134},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.46","gm":5}]},{"ndbno":"14019","name":"Alcoholic beverage, tequila sunrise, canned","weight":31.1,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"34","gm":110},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.03","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"3.51","gm":11.3}]},{"ndbno":"14531","name":"Alcoholic beverage, whiskey sour","weight":30.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"45","gm":149},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.01","gm":0.03},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"4.00","gm":13.17}]},{"ndbno":"14027","name":"Alcoholic beverage, whiskey sour, canned","weight":30.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"37","gm":119},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"4.13","gm":13.4}]},{"ndbno":"14029","name":"Alcoholic beverage, whiskey sour, prepared from item 14028","weight":30.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"47","gm":153},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"3.89","gm":12.78},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.02","gm":0.06},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"3.90","gm":12.82}]},{"ndbno":"14025","name":"Alcoholic beverage, whiskey sour, prepared with water, whiskey and powder mix","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"48","gm":164},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"4.65","gm":15.81},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.01","gm":0.02},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"4.66","gm":15.85}]},{"ndbno":"43154","name":"Alcoholic beverage, wine, cooking","weight":4.9,"measure":"1.0 tsp","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"2","gm":50},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.08","gm":1.55},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.31","gm":6.3}]},{"ndbno":"14536","name":"Alcoholic beverage, wine, dessert, dry","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"45","gm":152},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.32","gm":1.09},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"3.44","gm":11.67}]},{"ndbno":"14057","name":"Alcoholic beverage, wine, dessert, sweet","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"47","gm":160},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"2.30","gm":7.78},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"4.04","gm":13.69}]},{"ndbno":"43155","name":"Alcoholic beverage, wine, light","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"14","gm":49},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.34","gm":1.15},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.35","gm":1.17}]},{"ndbno":"14084","name":"Alcoholic beverage, wine, table, all","weight":148,"measure":"1.0 serving (5 fl oz)","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"123","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"1.17","gm":0.79},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"4.03","gm":2.72}]},{"ndbno":"14096","name":"Alcoholic beverage, wine, table, red","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":85},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.18","gm":0.62},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.77","gm":2.61}]},{"ndbno":"14101","name":"Alcoholic Beverage, wine, table, red, Barbera","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":85},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.82","gm":2.79}]},{"ndbno":"14152","name":"Alcoholic Beverage, wine, table, red, Burgundy","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":86},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.09","gm":3.69}]},{"ndbno":"14098","name":"Alcoholic Beverage, wine, table, red, Cabernet Franc","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.72","gm":2.45}]},{"ndbno":"14097","name":"Alcoholic Beverage, wine, table, red, Cabernet Sauvignon","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.76","gm":2.6}]},{"ndbno":"14109","name":"Alcoholic Beverage, wine, table, red, Carignane","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"22","gm":74},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.71","gm":2.4}]},{"ndbno":"14105","name":"Alcoholic Beverage, wine, table, red, Claret","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.88","gm":3.01}]},{"ndbno":"14158","name":"Alcoholic Beverage, wine, table, red, Gamay","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"23","gm":78},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.70","gm":2.38}]},{"ndbno":"14107","name":"Alcoholic Beverage, wine, table, red, Lemberger","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":80},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.72","gm":2.46}]},{"ndbno":"14602","name":"Alcoholic Beverage, wine, table, red, Merlot","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.18","gm":0.62},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.74","gm":2.51}]},{"ndbno":"14159","name":"Alcoholic Beverage, wine, table, red, Mouvedre","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"26","gm":88},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.78","gm":2.64}]},{"ndbno":"14103","name":"Alcoholic Beverage, wine, table, red, Petite Sirah","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":85},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.79","gm":2.68}]},{"ndbno":"14099","name":"Alcoholic Beverage, wine, table, red, Pinot Noir","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":82},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.68","gm":2.31}]},{"ndbno":"14108","name":"Alcoholic Beverage, wine, table, red, Sangiovese","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":86},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.77","gm":2.62}]},{"ndbno":"14100","name":"Alcoholic Beverage, wine, table, red, Syrah","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.76","gm":2.58}]},{"ndbno":"14102","name":"Alcoholic Beverage, wine, table, red, Zinfandel","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"26","gm":88},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.84","gm":2.86}]},{"ndbno":"14106","name":"Alcoholic beverage, wine, table, white","weight":29.4,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":82},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.28","gm":0.96},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.76","gm":2.6}]},{"ndbno":"14160","name":"Alcoholic beverage, wine, table, white, Chardonnay","weight":29.3,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":84},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.28","gm":0.96},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.63","gm":2.16}]},{"ndbno":"14116","name":"Alcoholic beverage, wine, table, white, Chenin Blanc","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":80},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.98","gm":3.31}]},{"ndbno":"14117","name":"Alcoholic beverage, wine, table, white, Fume Blanc","weight":29.3,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":82},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.67","gm":2.27}]},{"ndbno":"14124","name":"Alcoholic beverage, wine, table, white, Gewurztraminer","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":81},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.77","gm":2.6}]},{"ndbno":"14135","name":"Alcoholic beverage, wine, table, white, late harvest","weight":30.8,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"34","gm":112},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"4.12","gm":13.39}]},{"ndbno":"14125","name":"Alcoholic beverage, wine, table, white, late harvest, Gewurztraminer","weight":30.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"33","gm":108},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"3.47","gm":11.39}]},{"ndbno":"14120","name":"Alcoholic beverage, wine, table, white, Muller Thurgau","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"22","gm":76},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.03","gm":3.48}]},{"ndbno":"14140","name":"Alcoholic beverage, wine, table, white, Muscat","weight":30,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":82},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.57","gm":5.23}]},{"ndbno":"14138","name":"Alcoholic beverage, wine, table, white, Pinot Blanc","weight":29.3,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":81},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.57","gm":1.94}]},{"ndbno":"14113","name":"Alcoholic beverage, wine, table, white, Pinot Gris (Grigio)","weight":29.3,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.60","gm":2.06}]},{"ndbno":"14132","name":"Alcoholic beverage, wine, table, white, Riesling","weight":29.6,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":80},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.11","gm":3.74}]},{"ndbno":"14134","name":"Alcoholic beverage, wine, table, white, Sauvignon Blanc","weight":29.3,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":81},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.60","gm":2.05}]},{"ndbno":"14126","name":"Alcoholic beverage, wine, table, white, Semillon","weight":29.5,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"24","gm":82},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.92","gm":3.12}]},{"ndbno":"14251","name":"Alcoholic beverages, beer, higher alcohol","weight":30.6,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"18","gm":58},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.08","gm":0.27}]},{"ndbno":"14253","name":"Alcoholic beverages, wine, rose","weight":30.3,"measure":"1.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"25","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.00","gm":0},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.15","gm":3.8}]},{"ndbno":"11001","name":"Alfalfa seeds, sprouted, raw","weight":33,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"8","gm":23},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.07","gm":0.2},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.23","gm":0.69},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.69","gm":2.1}]},{"ndbno":"20002","name":"Amaranth grain, cooked","weight":246,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"251","gm":102},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.89","gm":1.58},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"45.98","gm":18.69}]},{"ndbno":"20001","name":"Amaranth grain, uncooked","weight":193,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"716","gm":371},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"3.26","gm":1.69},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"13.55","gm":7.02},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"125.93","gm":65.25}]},{"ndbno":"11700","name":"Amaranth leaves, cooked, boiled, drained, with salt","weight":132,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"28","gm":21},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.18},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"5.43","gm":4.11}]},{"ndbno":"11004","name":"Amaranth leaves, cooked, boiled, drained, without salt","weight":132,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"28","gm":21},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.18},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"5.43","gm":4.11}]},{"ndbno":"11003","name":"Amaranth leaves, raw","weight":28,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"6","gm":23},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.09","gm":0.33},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"1.13","gm":4.02}]},{"ndbno":"28354","name":"Andrea's, Gluten Free Soft Dinner Roll","weight":69,"measure":"1.0 roll","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"177","gm":257},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"2.06","gm":2.98},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"5.66","gm":8.2},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"27.77","gm":40.24}]},{"ndbno":"04609","name":"Animal fat, bacon grease","weight":4.3,"measure":"1.0 tsp","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"39","gm":897},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"4.28","gm":99.5},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.00","gm":0}]},{"ndbno":"09400","name":"Apple juice, canned or bottled, unsweetened, with added ascorbic acid","weight":248,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"114","gm":46},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"23.86","gm":9.62},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.32","gm":0.13},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"28.02","gm":11.3}]},{"ndbno":"09517","name":"Apple juice, canned or bottled, unsweetened, with added ascorbic acid, calcium, and potassium","weight":177,"measure":"6.0 fl oz","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"85","gm":48},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"16.76","gm":9.47},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.30","gm":0.17},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"20.34","gm":11.49}]},{"ndbno":"09016","name":"Apple juice, canned or bottled, unsweetened, without added ascorbic acid","weight":248,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"114","gm":46},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"23.86","gm":9.62},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.32","gm":0.13},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"28.02","gm":11.3}]},{"ndbno":"09018","name":"Apple juice, frozen concentrate, unsweetened, diluted with 3 volume water without added ascorbic acid","weight":239,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"112","gm":47},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"26.12","gm":10.93},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"27.58","gm":11.54}]},{"ndbno":"09411","name":"Apple juice, frozen concentrate, unsweetened, diluted with 3 volume water, with added ascorbic acid","weight":239,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"112","gm":47},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"27.58","gm":11.54}]},{"ndbno":"09410","name":"Apple juice, frozen concentrate, unsweetened, undiluted, with added ascorbic acid","weight":211,"measure":"1.0 can (6 fl oz)","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"350","gm":166},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"81.93","gm":38.83},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.78","gm":0.37},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"86.51","gm":41}]},{"ndbno":"09017","name":"Apple juice, frozen concentrate, unsweetened, undiluted, without added ascorbic acid","weight":211,"measure":"1.0 can (6 fl oz)","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"350","gm":166},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"81.93","gm":38.83},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.78","gm":0.37},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"86.51","gm":41}]},{"ndbno":"36000","name":"APPLEBEE'S, 9 oz house sirloin steak","weight":157,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"297","gm":189},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"14.26","gm":9.08},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"0.00","gm":0}]},{"ndbno":"36023","name":"APPLEBEE'S, chicken tenders platter","weight":209,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"621","gm":297},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.75","gm":0.36},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"33.94","gm":16.24},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"37.58","gm":17.98}]},{"ndbno":"36005","name":"APPLEBEE'S, chicken tenders, from kids' menu","weight":35,"measure":"1.0 piece","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"104","gm":296},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.14","gm":0.39},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"5.65","gm":16.15},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"6.43","gm":18.36}]},{"ndbno":"36019","name":"APPLEBEE'S, chili","weight":136,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"214","gm":157},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"3.09","gm":2.27},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"13.31","gm":9.79},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"6.22","gm":4.57}]},{"ndbno":"36021","name":"APPLEBEE'S, coleslaw","weight":76,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"91","gm":120},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"7.09","gm":9.33},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"5.39","gm":7.09},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"10.01","gm":13.17}]},{"ndbno":"36022","name":"APPLEBEE'S, crunchy onion rings","weight":350,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"1246","gm":356},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"15.68","gm":4.48},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"68.64","gm":19.61},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"140.59","gm":40.17}]},{"ndbno":"36001","name":"APPLEBEE'S, Double Crunch Shrimp","weight":206,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"665","gm":323},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"2.20","gm":1.07},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"38.93","gm":18.9},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"53.48","gm":25.96}]},{"ndbno":"36018","name":"APPLEBEE'S, fish, hand battered","weight":250,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"505","gm":202},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"1.27","gm":0.51},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"22.85","gm":9.14},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"41.62","gm":16.65}]},{"ndbno":"36002","name":"APPLEBEE'S, french fries","weight":164,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"476","gm":290},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.00","gm":0},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"21.60","gm":13.17},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"64.78","gm":39.5}]},{"ndbno":"36003","name":"APPLEBEE'S, KRAFT, Macaroni &amp; Cheese, from kid's menu","weight":124,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"177","gm":143},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"4.59","gm":3.7},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"5.38","gm":4.34},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"26.14","gm":21.08}]},{"ndbno":"36004","name":"APPLEBEE'S, mozzarella sticks","weight":32,"measure":"1.0 piece","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"101","gm":316},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"0.90","gm":2.8},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"5.88","gm":18.37},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"7.32","gm":22.87}]},{"ndbno":"09008","name":"Apples, canned, sweetened, sliced, drained, heated","weight":204,"measure":"1.0 cup slices","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"137","gm":67},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"30.27","gm":14.84},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.88","gm":0.43},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"34.35","gm":16.84}]},{"ndbno":"09010","name":"Apples, dehydrated (low moisture), sulfured, stewed","weight":193,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"143","gm":74},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.23","gm":0.12},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"38.43","gm":19.91}]},{"ndbno":"09009","name":"Apples, dehydrated (low moisture), sulfured, uncooked","weight":60,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"208","gm":346},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"48.68","gm":81.13},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.35","gm":0.58},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"56.12","gm":93.53}]},{"ndbno":"09013","name":"Apples, dried, sulfured, stewed, with added sugar","weight":280,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"232","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.20","gm":0.07},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"58.04","gm":20.73}]},{"ndbno":"09012","name":"Apples, dried, sulfured, stewed, without added sugar","weight":255,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"145","gm":57},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"33.97","gm":13.32},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.18","gm":0.07},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"39.07","gm":15.32}]},{"ndbno":"09011","name":"Apples, dried, sulfured, uncooked","weight":86,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"209","gm":243},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"49.18","gm":57.19},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.28","gm":0.32},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"56.67","gm":65.89}]},{"ndbno":"09015","name":"Apples, frozen, unsweetened, heated (Includes foods for USDA's Food Distribution Program)","weight":206,"measure":"1.0 cup slices","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"97","gm":47},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.68","gm":0.33},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"24.72","gm":12}]},{"ndbno":"09014","name":"Apples, frozen, unsweetened, unheated (Includes foods for USDA's Food Distribution Program)","weight":173,"measure":"1.0 cup slices","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"83","gm":48},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"17.47","gm":10.1},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.55","gm":0.32},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"21.30","gm":12.31}]},{"ndbno":"09504","name":"Apples, raw, fuji, with skin (Includes foods for USDA's Food Distribution Program)","weight":109,"measure":"1.0 cup, sliced","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"69","gm":63},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"12.73","gm":11.68},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.20","gm":0.18},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"16.59","gm":15.22}]},{"ndbno":"09503","name":"Apples, raw, gala, with skin (Includes foods for USDA's Food Distribution Program)","weight":109,"measure":"1.0 cup, sliced","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"62","gm":57},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"11.30","gm":10.37},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.13","gm":0.12},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"14.91","gm":13.68}]},{"ndbno":"09501","name":"Apples, raw, golden delicious, with skin","weight":109,"measure":"1.0 cup, sliced","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"62","gm":57},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"10.94","gm":10.04},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.16","gm":0.15},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"14.82","gm":13.6}]},{"ndbno":"09502","name":"Apples, raw, granny smith, with skin (Includes foods for USDA's Food Distribution Program)","weight":109,"measure":"1.0 cup, sliced","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"63","gm":58},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"10.45","gm":9.59},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.21","gm":0.19},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"14.83","gm":13.61}]},{"ndbno":"09500","name":"Apples, raw, red delicious, with skin (Includes foods for USDA's Food Distribution Program)","weight":109,"measure":"1.0 cup, sliced","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"64","gm":59},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"11.42","gm":10.48},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.22","gm":0.2},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"15.33","gm":14.06}]},{"ndbno":"09003","name":"Apples, raw, with skin (Includes foods for USDA's Food Distribution Program)","weight":125,"measure":"1.0 cup, quartered or chopped","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"65","gm":52},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"12.99","gm":10.39},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.21","gm":0.17},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"17.26","gm":13.81}]},{"ndbno":"09004","name":"Apples, raw, without skin","weight":110,"measure":"1.0 cup slices","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"53","gm":48},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"11.11","gm":10.1},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.14","gm":0.13},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"14.04","gm":12.76}]},{"ndbno":"09005","name":"Apples, raw, without skin, cooked, boiled","weight":171,"measure":"1.0 cup slices","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"91","gm":53},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"18.83","gm":11.01},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.62","gm":0.36},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"23.32","gm":13.64}]},{"ndbno":"09006","name":"Apples, raw, without skin, cooked, microwave","weight":170,"measure":"1.0 cup slices","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"95","gm":56},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"19.74","gm":11.61},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.71","gm":0.42},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"24.50","gm":14.41}]},{"ndbno":"09402","name":"Applesauce, canned, sweetened, with salt","weight":255,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"194","gm":76},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.46","gm":0.18},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"50.77","gm":19.91}]},{"ndbno":"09020","name":"Applesauce, canned, sweetened, without salt","weight":246,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"167","gm":68},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"36.09","gm":14.67},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.42","gm":0.17},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"43.03","gm":17.49}]},{"ndbno":"09401","name":"Applesauce, canned, unsweetened, with added ascorbic acid","weight":244,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"102","gm":42},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"22.91","gm":9.39},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"27.50","gm":11.27}]},{"ndbno":"09019","name":"Applesauce, canned, unsweetened, without added ascorbic acid (Includes foods for USDA's Food Distribution Program)","weight":244,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"102","gm":42},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"22.91","gm":9.39},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"27.50","gm":11.27}]},{"ndbno":"09036","name":"Apricot nectar, canned, with added ascorbic acid","weight":266,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"149","gm":56},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"34.02","gm":12.79},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"1.20","gm":0.45},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"36.26","gm":13.63}]},{"ndbno":"09029","name":"Apricots, canned, extra heavy syrup pack, without skin, solids and liquids","weight":246,"measure":"1.0 cup, whole, without pits","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"236","gm":96},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.10","gm":0.04},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"61.13","gm":24.85}]},{"ndbno":"09025","name":"Apricots, canned, extra light syrup pack, with skin, solids and liquids (Includes foods for USDA's Food Distribution Program)","weight":247,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"121","gm":49},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.25","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"30.88","gm":12.5}]},{"ndbno":"09027","name":"Apricots, canned, heavy syrup pack, with skin, solids and liquids","weight":258,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"214","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"51.26","gm":19.87},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.21","gm":0.08},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"55.39","gm":21.47}]},{"ndbno":"09028","name":"Apricots, canned, heavy syrup pack, without skin, solids and liquids","weight":258,"measure":"1.0 cup, whole, without pits","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"214","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.23","gm":0.09},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"55.34","gm":21.45}]},{"ndbno":"09357","name":"Apricots, canned, heavy syrup, drained","weight":219,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"182","gm":83},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"40.84","gm":18.65},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.11},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"46.67","gm":21.31}]},{"ndbno":"09024","name":"Apricots, canned, juice pack, with skin, solids and liquids","weight":244,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"117","gm":48},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"26.21","gm":10.74},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.10","gm":0.04},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"30.11","gm":12.34}]},{"ndbno":"09026","name":"Apricots, canned, light syrup pack, with skin, solids and liquids","weight":253,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"159","gm":63},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"37.67","gm":14.89},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.13","gm":0.05},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"41.72","gm":16.49}]},{"ndbno":"09022","name":"Apricots, canned, water pack, with skin, solids and liquids","weight":243,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"66","gm":27},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"11.64","gm":4.79},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.39","gm":0.16},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"15.53","gm":6.39}]},{"ndbno":"09023","name":"Apricots, canned, water pack, without skin, solids and liquids","weight":227,"measure":"1.0 cup, whole, without pits","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"50","gm":22},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.07","gm":0.03},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"12.44","gm":5.48}]},{"ndbno":"09031","name":"Apricots, dehydrated (low-moisture), sulfured, stewed","weight":249,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"314","gm":126},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.60","gm":0.24},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"81.22","gm":32.62}]},{"ndbno":"09030","name":"Apricots, dehydrated (low-moisture), sulfured, uncooked","weight":119,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"381","gm":320},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.74","gm":0.62},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"98.64","gm":82.89}]},{"ndbno":"09034","name":"Apricots, dried, sulfured, stewed, with added sugar","weight":270,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"305","gm":113},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.41","gm":0.15},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"79.00","gm":29.26}]},{"ndbno":"09033","name":"Apricots, dried, sulfured, stewed, without added sugar","weight":250,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"212","gm":85},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"48.92","gm":19.57},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.45","gm":0.18},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"55.38","gm":22.15}]},{"ndbno":"09032","name":"Apricots, dried, sulfured, uncooked","weight":130,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"313","gm":241},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"69.47","gm":53.44},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.66","gm":0.51},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"81.43","gm":62.64}]},{"ndbno":"09035","name":"Apricots, frozen, sweetened","weight":242,"measure":"1.0 cup","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"237","gm":98},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"--","gm":"--"},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.24","gm":0.1},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"60.74","gm":25.1}]},{"ndbno":"09021","name":"Apricots, raw","weight":155,"measure":"1.0 cup, halves","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"74","gm":48},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"14.32","gm":9.24},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"0.60","gm":0.39},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"17.24","gm":11.12}]},{"ndbno":"21527","name":"ARBY'S, roast beef sandwich, classic","weight":149,"measure":"1.0 sandwich","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"361","gm":242},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"5.72","gm":3.84},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"15.35","gm":10.3},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"33.09","gm":22.21}]},{"ndbno":"18522","name":"Archway Home Style Cookies, Chocolate Chip Ice Box","weight":24,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"119","gm":497},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"8.17","gm":34.06},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"5.86","gm":24.4},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"15.60","gm":65.02}]},{"ndbno":"18524","name":"Archway Home Style Cookies, Coconut Macaroon","weight":22,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"101","gm":460},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"9.94","gm":45.16},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"4.96","gm":22.55},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"13.47","gm":61.23}]},{"ndbno":"18527","name":"Archway Home Style Cookies, Date Filled Oatmeal","weight":25,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"100","gm":400},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"8.57","gm":34.27},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.01","gm":12.05},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"17.04","gm":68.16}]},{"ndbno":"18528","name":"Archway Home Style Cookies, Dutch Cocoa","weight":24,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"103","gm":431},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"8.48","gm":35.35},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.60","gm":14.99},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"16.67","gm":69.44}]},{"ndbno":"18529","name":"Archway Home Style Cookies, Frosty Lemon","weight":26,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"112","gm":430},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"8.67","gm":33.35},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"4.45","gm":17.11},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"16.84","gm":64.78}]},{"ndbno":"18532","name":"Archway Home Style Cookies, Iced Molasses","weight":28,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"118","gm":420},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"10.76","gm":38.43},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"4.04","gm":14.43},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"19.35","gm":69.12}]},{"ndbno":"18533","name":"Archway Home Style Cookies, Iced Oatmeal","weight":28,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"122","gm":435},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"10.42","gm":37.2},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"4.63","gm":16.53},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"18.69","gm":66.76}]},{"ndbno":"18535","name":"Archway Home Style Cookies, Molasses","weight":26,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"105","gm":403},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"9.45","gm":36.35},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.14","gm":12.06},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"18.05","gm":69.41}]},{"ndbno":"18537","name":"Archway Home Style Cookies, Oatmeal","weight":25,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"105","gm":421},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"8.62","gm":34.5},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.52","gm":14.08},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"17.04","gm":68.17}]},{"ndbno":"18538","name":"Archway Home Style Cookies, Oatmeal Raisin","weight":26,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"106","gm":406},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"10.28","gm":39.55},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.14","gm":12.08},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"18.01","gm":69.27}]},{"ndbno":"18539","name":"Archway Home Style Cookies, Old Fashioned Molasses","weight":26,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"106","gm":406},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"9.38","gm":36.09},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.08","gm":11.83},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"18.34","gm":70.55}]},{"ndbno":"18540","name":"Archway Home Style Cookies, Old Fashioned Windmill Cookies","weight":20,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"94","gm":468},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"6.53","gm":32.64},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.51","gm":17.55},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"14.45","gm":72.23}]},{"ndbno":"18541","name":"Archway Home Style Cookies, Peanut Butter","weight":21,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"101","gm":480},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"6.84","gm":32.55},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"5.10","gm":24.28},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"12.28","gm":58.48}]},{"ndbno":"18544","name":"Archway Home Style Cookies, Raspberry Filled","weight":25,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"100","gm":400},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"7.94","gm":31.76},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.31","gm":13.26},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"16.48","gm":65.92}]},{"ndbno":"18562","name":"Archway Home Style Cookies, Reduced Fat Ginger Snaps","weight":32,"measure":"1.0 serving","nutrients":[{"nutrient_id":"208","nutrient":"Energy","unit":"kcal","value":"136","gm":424},{"nutrient_id":"269","nutrient":"Sugars, total","unit":"g","value":"11.61","gm":36.28},{"nutrient_id":"204","nutrient":"Total lipid (fat)","unit":"g","value":"3.56","gm":11.14},{"nutrient_id":"205","nutrient":"Carbohydrate, by difference","unit":"g","value":"24.39","gm":76.23}]}]}};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aqkhan/Documents/test/usda-api-react/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map