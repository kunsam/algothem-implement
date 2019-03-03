webpackHotUpdate("static/development/pages/tree/red-black-tree.js",{

/***/ "./src/view/font/font-manager.ts":
/*!***************************************!*\
  !*** ./src/view/font/font-manager.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FontManager; });
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");







var FontManager =
/*#__PURE__*/
function () {
  function FontManager() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FontManager);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FontManager, null, [{
    key: "getFontAsync",
    value: function getFontAsync(type) {
      var _this = this;

      if (FontManager.frontMap.has(type)) {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(FontManager.frontMap.get(type));
      }

      var path = FontManager.registerdFrontPathMap.get(type);

      if (!path) {
        throw new Error('Dont Exist this font type');
      }

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res) {
        _this.fontLoader.load(path, function (result) {
          res(result);
        });
      });
    }
  }, {
    key: "getFont",
    value: function getFont(type) {
      return FontManager.frontMap.get(type);
    }
  }, {
    key: "registerFont",
    value: function registerFont(name, path) {
      FontManager.registerdFrontPathMap.set(name, path);
    }
  }]);

  return FontManager;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(FontManager, "fontLoader", new three__WEBPACK_IMPORTED_MODULE_5__["FontLoader"]());

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(FontManager, "frontMap", new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a());

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(FontManager, "registerdFrontPathMap", new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a());



/***/ })

})
//# sourceMappingURL=red-black-tree.js.83cc4d354517849710ae.hot-update.js.map