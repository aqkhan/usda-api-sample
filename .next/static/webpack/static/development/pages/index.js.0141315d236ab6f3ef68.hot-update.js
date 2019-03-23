webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aqkhan/Documents/test/usda-api-react/pages/index.js";


var data = __webpack_require__(/*! ../stub/data-sample.json */ "./stub/data-sample.json");

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      searchTerm = _useState2[0],
      updateSearchTerm = _useState2[1];

  var filterData = searchTerm.length > 1 ? data.report.foods.filter(function (item) {
    return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  }) : [];
  console.log('Searched data: ', filterData);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Main page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Some paragraph"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Search here...",
    onKeyUp: function onKeyUp(e) {
      return updateSearchTerm(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "You searched for: ", searchTerm));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.0141315d236ab6f3ef68.hot-update.js.map