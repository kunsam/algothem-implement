module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./components/control-panel.less":
/*!***************************************!*\
  !*** ./components/control-panel.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/control-panel.tsx":
/*!**************************************!*\
  !*** ./components/control-panel.tsx ***!
  \**************************************/
/*! exports provided: ButtonInputPair, ControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonInputPair", function() { return ButtonInputPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanel", function() { return ControlPanel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _control_panel_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./control-panel.less */ "./components/control-panel.less");
/* harmony import */ var _control_panel_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_control_panel_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/kun/Documents/project/algothem-implement/components/control-panel.tsx";



var ButtonInputPair =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ButtonInputPair, _React$Component);

  function ButtonInputPair(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ButtonInputPair);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ButtonInputPair).call(this, props));
    _this.state = {
      value: '',
      operating: false
    };

    if (_this.props.app) {
      _this.props.app.eventManager.listenOperationDone(function () {
        _this.setState({
          value: '',
          operating: false
        });
      });
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ButtonInputPair, [{
    key: "onInputChange",
    value: function onInputChange(e) {
      this.setState({
        value: e.target.value
      });
      this.props.onInputChange(e);
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (this.state.value) {
        this.props.onConfirm(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.value));
        this.setState({
          operating: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // const 
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "ButtonInputPair",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        disabled: this.state.operating,
        type: this.props.type,
        value: this.state.value,
        onKeyDown: function onKeyDown(e) {
          if (e.keyCode === 13) _this2.onClick();
        },
        onChange: this.onInputChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: this.onClick.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.label));
    }
  }]);

  return ButtonInputPair;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
var ControlPanel =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ControlPanel, _React$Component2);

  function ControlPanel(props) {
    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ControlPanel);

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ControlPanel).call(this, props));
    _this3.state = {
      insertKey: ''
    };
    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ControlPanel, [{
    key: "onInsert",
    value: function onInsert(e) {
      if (!e.target.value) {
        return;
      }
    }
  }, {
    key: "onConfirmInsert",
    value: function onConfirmInsert(key) {
      this.props.app.eventManager.emitInsertKey(key);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "ControlPanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](ButtonInputPair, {
        label: "\u63D2\u5165",
        type: "number",
        app: this.props.app,
        onConfirm: this.onConfirmInsert.bind(this),
        onInputChange: this.onInsert.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](ButtonInputPair, {
        label: "\u5220\u9664",
        type: "number",
        app: this.props.app,
        onConfirm: this.onConfirmInsert,
        onInputChange: this.onInsert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](ButtonInputPair, {
        label: "\u67E5\u627E",
        type: "number",
        app: this.props.app,
        onConfirm: this.onConfirmInsert,
        onInputChange: this.onInsert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](ButtonInputPair, {
        label: "\u5DE6\u65CB",
        app: this.props.app,
        onConfirm: this.onConfirmInsert,
        onInputChange: this.onInsert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](ButtonInputPair, {
        label: "\u53F3\u65CB",
        app: this.props.app,
        onConfirm: this.onConfirmInsert,
        onInputChange: this.onInsert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }));
    }
  }]);

  return ControlPanel;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./layouts/app.less":
/*!**************************!*\
  !*** ./layouts/app.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layouts/app.tsx":
/*!*************************!*\
  !*** ./layouts/app.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppLayout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.less */ "./layouts/app.less");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/kun/Documents/project/algothem-implement/layouts/app.tsx";
// import '../static/antd.min.css';



var AppLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppLayout, _React$Component);

  function AppLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppLayout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppLayout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        id: "AppLayout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return AppLayout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/antd/lib/message/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/message/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/modal/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/tree/red-black-tree.tsx":
/*!***************************************!*\
  !*** ./pages/tree/red-black-tree.tsx ***!
  \***************************************/
/*! exports provided: RedBlackTreePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedBlackTreePage", function() { return RedBlackTreePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return redBlackTree; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/modal/style/index.css */ "./node_modules/antd/lib/modal/style/index.css");
/* harmony import */ var antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layouts_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts/app */ "./layouts/app.tsx");
/* harmony import */ var react_object_inspector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-object-inspector */ "react-object-inspector");
/* harmony import */ var react_object_inspector__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_object_inspector__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_core_event_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/core/event-manager */ "./src/core/event-manager.ts");
/* harmony import */ var _components_control_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/control-panel */ "./components/control-panel.tsx");
/* harmony import */ var _static_js_orbitcontrol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../static/js/orbitcontrol.js */ "./static/js/orbitcontrol.js");
/* harmony import */ var _src_tree_red_black_tree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/tree/red-black-tree */ "./src/tree/red-black-tree.ts");
/* harmony import */ var _src_view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/view/tree/red-black-tree-viewobject */ "./src/view/tree/red-black-tree-viewobject.ts");
/* harmony import */ var _src_view_font_font_manager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/view/font/font-manager */ "./src/view/font/font-manager.ts");







var _jsxFileName = "/Users/kun/Documents/project/algothem-implement/pages/tree/red-black-tree.tsx";












var RedBlackTreePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RedBlackTreePage, _React$Component);

  function RedBlackTreePage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RedBlackTreePage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RedBlackTreePage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RedBlackTreePage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _src_view_font_font_manager__WEBPACK_IMPORTED_MODULE_18__["default"].registerdFrontPathMap.set('helv', '/static/helv-font.json');
    }
  }, {
    key: "initScene",
    value: function initScene() {
      var scene = new three__WEBPACK_IMPORTED_MODULE_9__["Scene"]();
      scene.background = new three__WEBPACK_IMPORTED_MODULE_9__["Color"](0xf0f0f0);
      scene.add(new three__WEBPACK_IMPORTED_MODULE_9__["AmbientLight"](0xf0f0f0));
      var light = new three__WEBPACK_IMPORTED_MODULE_9__["SpotLight"](0xffffff, 1.5);
      light.position.set(0, 1500, 200);
      light.castShadow = true;
      var lshadow = new three__WEBPACK_IMPORTED_MODULE_9__["LightShadow"](new three__WEBPACK_IMPORTED_MODULE_9__["PerspectiveCamera"](70, 1, 200, 2000));
      light.shadow = lshadow;
      light.shadow.bias = -0.000222;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      scene.add(light);
      var planeGeometry = new three__WEBPACK_IMPORTED_MODULE_9__["PlaneBufferGeometry"](2000, 2000);
      planeGeometry.rotateX(-Math.PI / 2);
      var planeMaterial = new three__WEBPACK_IMPORTED_MODULE_9__["ShadowMaterial"]({
        opacity: 0.2
      });
      var plane = new three__WEBPACK_IMPORTED_MODULE_9__["Mesh"](planeGeometry, planeMaterial);
      plane.position.y = -200;
      plane.receiveShadow = true;
      scene.add(plane);
      var helper = new three__WEBPACK_IMPORTED_MODULE_9__["GridHelper"](2000, 100);
      helper.position.y = -199;

      if (helper.material instanceof three__WEBPACK_IMPORTED_MODULE_9__["Material"]) {
        helper.material.opacity = 0.25;
        helper.material.transparent = true;
      }

      scene.add(helper);
      return scene;
    }
  }, {
    key: "initTree",
    value: function initTree() {
      var _this = this;

      var treeContainer = new three__WEBPACK_IMPORTED_MODULE_9__["Object3D"]();
      var redblacktree = new _src_tree_red_black_tree__WEBPACK_IMPORTED_MODULE_16__["RedBlackTree"]();
      redblacktree.insert(50);
      redblacktree.insert(30);
      redblacktree.insert(42);
      redblacktree.insert(18);
      redblacktree.insert(26);
      redblacktree.insert(50);
      redblacktree.insert(82);
      _src_view_font_font_manager__WEBPACK_IMPORTED_MODULE_18__["default"].getFontAsync('helv').then(function () {
        _this._redBlackTreeViewObject = new _src_view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_17__["RedBlackTreeViewObject"](_this.props.app, redblacktree);
        treeContainer.add(_this._redBlackTreeViewObject);

        _this.props.app.eventManager.listenInsertKey(function (key) {
          _this._redBlackTreeViewObject.insert(key);
        });
      });
      return treeContainer;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var container = document.getElementById('rb-container');

      if (!container) {
        return;
      }

      var scene = this.initScene();
      var camera = new three__WEBPACK_IMPORTED_MODULE_9__["PerspectiveCamera"](70, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(0, 250, 1000);
      camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_9__["Vector3"](0, 0, -1));
      camera.rotation.copy(new three__WEBPACK_IMPORTED_MODULE_9__["Euler"]());
      this.camera = camera;
      scene.add(camera);
      var renderer = new three__WEBPACK_IMPORTED_MODULE_9__["WebGLRenderer"]({
        antialias: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);
      var controls = new _static_js_orbitcontrol_js__WEBPACK_IMPORTED_MODULE_15__["OrbitControls"](camera, renderer.domElement);
      controls.damping = 0.2;
      controls.addEventListener('change', function () {
        renderer.render(scene, camera);
      });
      var tree = this.initTree();
      scene.add(tree);
      var raycaster = new three__WEBPACK_IMPORTED_MODULE_9__["Raycaster"]();
      renderer.domElement.addEventListener('click', raycast, false);

      function raycast(e) {
        raycaster.setFromCamera({
          x: e.clientX / window.innerWidth * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1
        }, camera);

        if (tree.children[0] && tree.children[0].children) {
          var intersects = raycaster.intersectObjects(tree.children[0].children, true);
          var findNode = intersects.find(function (i) {
            return i.object.userData.node;
          });

          if (findNode && findNode.object.userData.node) {
            var node = findNode.object.userData.node;
            antd__WEBPACK_IMPORTED_MODULE_7__["Modal"].info({
              title: "node: ".concat(node.key),
              content: react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 123
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"](react_object_inspector__WEBPACK_IMPORTED_MODULE_12___default.a, {
                data: node,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 123
                },
                __self: this
              }))
            });
          }
        }
      }

      animate();
      document.addEventListener('keydown', this.onKeyDown.bind(this));
      var scope = this;

      function animate() {
        // 相机情况根据节点数量进行调整
        // 网格helper更新为叶节点下面的位置
        requestAnimationFrame(animate);

        if (scope && scope._redBlackTreeViewObject) {
          scope._redBlackTreeViewObject.update();
        }

        renderer.render(scene, camera);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var camera = this.camera;
      if (!camera) return;
      var OFFSET = 10;
      var cameraDirection = camera.getWorldDirection(new three__WEBPACK_IMPORTED_MODULE_9__["Vector3"]()).normalize();

      switch (e.keyCode) {
        case 87:
          {
            // w
            camera.position.add(cameraDirection.clone().multiplyScalar(OFFSET));
            break;
          }

        case 83:
          {
            // s
            camera.position.add(cameraDirection.clone().multiplyScalar(-OFFSET));
            break;
          }

        case 65:
          {
            // a
            var crossVector = cameraDirection.clone().cross(new three__WEBPACK_IMPORTED_MODULE_9__["Vector3"](0, 1, 0));
            camera.position.add(crossVector.normalize().multiplyScalar(-OFFSET));
            break;
          }

        case 68:
          {
            // d
            var _crossVector = cameraDirection.clone().cross(new three__WEBPACK_IMPORTED_MODULE_9__["Vector3"](0, 1, 0));

            camera.position.add(_crossVector.normalize().multiplyScalar(OFFSET));
            break;
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        id: "rb-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      });
    }
  }]);

  return RedBlackTreePage;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var redBlackTree =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(redBlackTree, _React$Component2);

  function redBlackTree() {
    var _getPrototypeOf2;

    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, redBlackTree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(redBlackTree)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2), "_eventManager", new _src_core_event_manager__WEBPACK_IMPORTED_MODULE_13__["default"]());

    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(redBlackTree, [{
    key: "render",
    value: function render() {
      var app = {
        eventManager: this._eventManager
      };
      return react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_layouts_app__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        id: "control-header",
        style: {
          position: 'fixed'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_components_control_panel__WEBPACK_IMPORTED_MODULE_14__["ControlPanel"], {
        app: app,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10__["createElement"](RedBlackTreePage, {
        app: app,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }));
    }
  }]);

  return redBlackTree;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ }),

/***/ "./src/core/event-manager.ts":
/*!***********************************!*\
  !*** ./src/core/event-manager.ts ***!
  \***********************************/
/*! exports provided: CustomEventType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventType", function() { return CustomEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventManager; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);


var CustomEventType;

(function (CustomEventType) {
  CustomEventType["onInsert"] = "ONINSERT";
  CustomEventType["operationDone"] = "OperationDone";
})(CustomEventType || (CustomEventType = {}));



var EventManager =
/*#__PURE__*/
function () {
  function EventManager() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventManager);

    this.event = new events__WEBPACK_IMPORTED_MODULE_2___default.a();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventManager, [{
    key: "listenInsertKey",
    value: function listenInsertKey(listener) {
      this.event.on(CustomEventType.onInsert, listener);
    }
  }, {
    key: "emitInsertKey",
    value: function emitInsertKey(key) {
      this.event.emit(CustomEventType.onInsert, key);
    }
  }, {
    key: "listenOperationDone",
    value: function listenOperationDone(listener) {
      this.event.on(CustomEventType.operationDone, listener);
    }
  }, {
    key: "emitOperationDone",
    value: function emitOperationDone() {
      this.event.emit(CustomEventType.operationDone);
    }
  }]);

  return EventManager;
}();



/***/ }),

/***/ "./src/queue/queue.ts":
/*!****************************!*\
  !*** ./src/queue/queue.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queue; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var Queue =
/*#__PURE__*/
function () {
  // to create a queue of given capacity
  // front item
  // last item
  function Queue(capacity) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Queue);

    this.capacity = capacity || 1000;
    this.array = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Queue, [{
    key: "push",
    value: function push(item) {
      this.Enqueue(item);
    }
  }, {
    key: "Enqueue",
    value: function Enqueue(item) {
      this.array.push(item);
      this.front = this.array[0];
      this.rear = this.array[this.array.length - 1];
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.Dequeue();
    }
  }, {
    key: "Dequeue",
    value: function Dequeue() {
      return this.array.shift();
    }
  }, {
    key: "isFull",
    value: function isFull() {
      return this.array.length === this.capacity;
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.array.length === 0;
    }
  }]);

  return Queue;
}();



/***/ }),

/***/ "./src/stack/stack.ts":
/*!****************************!*\
  !*** ./src/stack/stack.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stack; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var Stack =
/*#__PURE__*/
function () {
  // to create a queue of given capacity
  // front item
  // last item
  function Stack(capacity) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stack);

    this.capacity = capacity || 1000;
    this.array = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stack, [{
    key: "push",
    value: function push(item) {
      this.array.push(item);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.array.pop();
    }
  }, {
    key: "isFull",
    value: function isFull() {
      return this.array.length === this.capacity;
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.array.length === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.array = [];
    }
  }]);

  return Stack;
}();



/***/ }),

/***/ "./src/tree/basic-binary-tree.ts":
/*!***************************************!*\
  !*** ./src/tree/basic-binary-tree.ts ***!
  \***************************************/
/*! exports provided: Node, BasicBinaryTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBinaryTree", function() { return BasicBinaryTree; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _queue_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queue/queue */ "./src/queue/queue.ts");
/* harmony import */ var _stack_stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stack/stack */ "./src/stack/stack.ts");




var Node = function Node(key) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Node);

  this.key = key;
  this.left = this.right = null;
};
var BasicBinaryTree =
/*#__PURE__*/
function () {
  function BasicBinaryTree(rootKey) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BasicBinaryTree);

    this.root = new Node(rootKey);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(BasicBinaryTree, [{
    key: "insert",
    value: function insert(key, node) {
      var queue = new _queue_queue__WEBPACK_IMPORTED_MODULE_2__["default"]();
      queue.push(node || this.root);
      var temp;

      while (!queue.empty()) {
        temp = queue.pop();

        if (!temp.left) {
          temp.left = new Node(key);
          break;
        } else queue.push(temp.left);

        if (!temp.right) {
          temp.right = new Node(key);
          break;
        } else queue.push(temp.right);
      }
    } // https://www.geeksforgeeks.org/deletion-binary-tree/

  }, {
    key: "delete",
    value: function _delete(key, node) {
      var keyNode;
      var queue = new _queue_queue__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var nodeRoot = node || this.root;
      queue.push(nodeRoot);
      var temp;

      while (!queue.empty()) {
        temp = queue.pop();
        if (temp.key === key) keyNode = temp;
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
      }

      if (keyNode) {
        var x = temp.key;

        this._deletDeepest(nodeRoot, temp);

        keyNode.key = x;
      }
    }
  }, {
    key: "_deletDeepest",
    value: function _deletDeepest(root, deleteNode) {
      var queue = new _queue_queue__WEBPACK_IMPORTED_MODULE_2__["default"]();
      queue.push(root);
      var temp;

      while (!queue.empty()) {
        temp = queue.pop();

        if (temp.right) {
          if (temp.right.key === deleteNode.key) {
            temp.right = null;
            return;
          } else queue.push(temp.right);
        }

        if (temp.left) {
          if (temp.left.key === deleteNode.key) {
            temp.left = null;
            return;
          } else queue.push(temp.left);
        }
      }
    }
  }, {
    key: "inorder",
    value: function inorder(node) {
      if (!node) return;
      this.inorder(node.left);
      console.log(node.key);
      this.inorder(node.right);
    }
  }, {
    key: "iterativePreorder",
    value: function iterativePreorder(root) {
      if (root === null) return;
      var stack = new _stack_stack__WEBPACK_IMPORTED_MODULE_3__["default"]();
      stack.push(root);

      while (!stack.empty()) {
        var node = stack.pop();
        console.log('current key:', node.key);

        if (node.right) {
          stack.push(node.right);
        }

        if (node.left) {
          stack.push(node.left);
        }
      }
    }
  }, {
    key: "levelOrderTraverse",
    value: function levelOrderTraverse(node) {
      var queue = new _queue_queue__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var tempNode = node;

      while (tempNode) {
        console.log(tempNode.key);

        if (tempNode.left) {
          queue.Enqueue(tempNode.left);
        }

        if (tempNode.right) {
          queue.Enqueue(tempNode.right);
        }

        tempNode = queue.Dequeue();
      }
    }
  }, {
    key: "isMirror",
    value: function isMirror(node1, node2) {
      if (node1 === null && node2 === null) return true;

      if (node1 && node2 && node1.key === node2.key) {
        return this.isMirror(node1.left, node2.right) && this.isMirror(node1.right, node2.left);
      }

      return false;
    }
  }]);

  return BasicBinaryTree;
}();
var root = new Node(10);
root.left = new Node(11);
root.left.left = new Node(7);
root.left.right = new Node(12);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);
/*
           10
        /     \
      11       9
      / \     / \
     7  12   15  8
*/
// const testTree = new BasicBinaryTree(10)
// testTree.inorder(root);
// console.log('\n----')
// testTree.delete(11, root);
// testTree.inorder(root);
// console.log('\n----')
// testTree.insert(11);
// testTree.inorder(root);
// testTree.levelOrderTraverse(root);

/***/ }),

/***/ "./src/tree/red-black-tree.ts":
/*!************************************!*\
  !*** ./src/tree/red-black-tree.ts ***!
  \************************************/
/*! exports provided: RBColor, RBNode, RedBlackTree, checkInsert, checkInsert2, checkDelete, checkrotateLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBColor", function() { return RBColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBNode", function() { return RBNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedBlackTree", function() { return RedBlackTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInsert", function() { return checkInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInsert2", function() { return checkInsert2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDelete", function() { return checkDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkrotateLeft", function() { return checkrotateLeft; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _basic_binary_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic-binary-tree */ "./src/tree/basic-binary-tree.ts");
/* harmony import */ var _util_traversal_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/traversal-helper */ "./src/util/traversal-helper.ts");
/* harmony import */ var _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../view/tree/red-black-tree-viewobject */ "./src/view/tree/red-black-tree-viewobject.ts");











var RBColor;

(function (RBColor) {
  RBColor[RBColor["red"] = 1] = "red";
  RBColor[RBColor["black"] = 2] = "black";
})(RBColor || (RBColor = {}));

// visualization: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
var RBNode =
/*#__PURE__*/
function (_Node) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RBNode, _Node);

  function RBNode(key) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RBNode);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RBNode).call(this, key));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "color", RBColor.red);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "userData", {});

    _this.left = _this.right = _this.parent = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RBNode, [{
    key: "uncle",
    value: function uncle() {
      if (this.parent === null || this.parent.parent === null) {
        return null;
      }

      return this.parent.isOnLeft() ? this.parent.parent.right : this.parent.parent.left;
    }
  }, {
    key: "sibling",
    value: function sibling() {
      if (this.parent === null) {
        return null;
      }

      return this.isOnLeft() ? this.parent.right : this.parent.left;
    }
  }, {
    key: "leftmost",
    value: function leftmost() {
      var temp = this;

      while (temp.left) {
        temp = temp.left;
      }

      return temp;
    }
  }, {
    key: "rightmost",
    value: function rightmost() {
      var temp = this;

      while (temp.right) {
        temp = temp.right;
      }

      return temp;
    }
  }, {
    key: "isOnLeft",
    value: function isOnLeft() {
      if (this.parent === null) {
        return false;
      }

      return this === this.parent.left;
    }
  }, {
    key: "hasChild",
    value: function hasChild() {
      return this.left !== null || this.right !== null;
    }
  }, {
    key: "hasOneChild",
    value: function hasOneChild() {
      return this.left !== null && this.right === null || this.right !== null && this.left === null;
    }
  }, {
    key: "hasTwoChild",
    value: function hasTwoChild() {
      return this.left !== null && this.right !== null;
    }
  }, {
    key: "hasRedChild",
    value: function hasRedChild() {
      return this.left !== null && this.left.color === RBColor.red || this.right !== null && this.right.color === RBColor.red;
    }
  }, {
    key: "moveDownWithNewParent",
    value: function moveDownWithNewParent(nParent) {
      if (this.parent) {
        if (this.isOnLeft()) {
          this.parent.left = nParent;
        } else {
          this.parent.right = nParent;
        }
      }

      nParent.parent = this.parent;
      this.parent = nParent;
    }
  }]);

  return RBNode;
}(_basic_binary_tree__WEBPACK_IMPORTED_MODULE_8__["Node"]);
// 还可以实现的操作包括 join / union / difference
var RedBlackTree =
/*#__PURE__*/
function () {
  function RedBlackTree() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RedBlackTree);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "dirtyFlows", []);

    this.root = null;
    this._traversalHelper = new _util_traversal_helper__WEBPACK_IMPORTED_MODULE_9__["TraversalHelper"]();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RedBlackTree, [{
    key: "inorder",
    value: function inorder() {
      this._traversalHelper.inorder(this.root);
    }
  }, {
    key: "inorderTraverse",
    value: function inorderTraverse(callback) {
      this._traversalHelper.inorderTraverse(this.root, callback);
    }
  }, {
    key: "levelOrder",
    value: function levelOrder() {
      this._traversalHelper.levelOrder(this.root);
    }
  }, {
    key: "levelOrderTraverse",
    value: function levelOrderTraverse(callback) {
      this._traversalHelper.levelOrderTraverse(this.root, callback);
    }
  }, {
    key: "_swapColor",
    value: function _swapColor(node1, node2) {
      if (node1 === null || node2 === null) {
        return;
      }

      var temp = node1.color;
      node1.color = node2.color;
      node2.color = temp;
    }
  }, {
    key: "_swapKey",
    value: function _swapKey(node1, node2) {
      if (node1 === null || node2 === null) {
        return;
      }

      var temp = node1.key;
      node1.key = node2.key;
      node2.key = temp;
    }
  }, {
    key: "insert",
    value: function insert(key, afterBSTInsert) {
      this.dirtyFlows = [];
      var node = new RBNode(key);
      this.root = this._BSTInsert(this.root, node);

      if (afterBSTInsert) {
        afterBSTInsert(node); // for animation
      }

      this._fix2RedBlack(node);

      return this.dirtyFlows;
    }
  }, {
    key: "rotateLeft",
    value: function rotateLeft(root, node) {
      var right = node.right;
      node.right = right && right.left || null;

      if (node.right) {
        node.right.parent = node;
      }

      if (right) {
        right.parent = node.parent;
      }

      if (node.parent === null) {
        root = right;
      } else if (node === node.parent.left) {
        node.parent.left = right;
      } else {
        node.parent.right = right;
      }

      if (right) {
        right.left = node;
      }

      node.parent = right;
      return root;
    }
  }, {
    key: "_rotateLeft",
    value: function _rotateLeft(node) {
      // 1. update node right and its relationship
      // 2. update node right parent and its relationship
      // 3. update node parent and its relationship
      var right = node.right;
      node.right = right && right.left || null;

      if (node.right) {
        node.right.parent = node;
      }

      if (right) {
        right.parent = node.parent;
      }

      if (node.parent === null) {
        this.root = right;
      } else if (node === node.parent.left) {
        node.parent.left = right;
      } else {
        node.parent.right = right;
      }

      if (right) {
        right.left = node;
      }

      node.parent = right;
      this.dirtyFlows.push([{
        node: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(node),
        dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].leftRotated
      }]);
    }
  }, {
    key: "_rotateRight",
    value: function _rotateRight(node) {
      var left = node.left;
      node.left = left && left.right || null;

      if (node.left !== null) {
        node.left.parent = node;
      }

      if (left) {
        left.parent = node.parent;
      }

      if (node.parent === null) {
        this.root = left;
      } else if (node === node.parent.left) {
        node.parent.left = left;
      } else {
        node.parent.right = left;
      }

      if (left) {
        left.right = node;
      }

      node.parent = left;
      this.dirtyFlows.push([{
        node: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(node),
        dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].rightRotated
      }]);
    }
  }, {
    key: "_pushRecolorFlows",
    value: function _pushRecolorFlows(flows) {
      this.dirtyFlows.push(flows.map(function (node) {
        return {
          node: node,
          dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].recolor
        };
      }));
    }
  }, {
    key: "_fix2RedBlack",
    value: function _fix2RedBlack(node) {
      if (node === null) {
        return;
      } // https://www.youtube.com/watch?v=5IBxA-bZZH8&index=3&list=PL9xmBV_5YoZNqDI8qfOZgzbqahCUmUEin
      // four senarios
      // 1. node = root -> color black
      // 2. node.uncle = red -> recolor
      // 3. node.uncle = black(Triangle) -> rotate node.parent
      // 4. node.uncle = black(line) -> rotate node.grandparent & recolor


      var parent;
      var grandParent;

      while (node && node !== this.root && node.color !== RBColor.black && node.parent && node.parent.color === RBColor.red // parent color must be red
      ) {
        parent = node.parent;
        grandParent = parent.parent;

        if (!parent || !grandParent) {
          break;
        }
        /*  Case : Parent of node is left child of Grand-parent of node */


        if (parent === grandParent.left) {
          var uncle = grandParent.right;
          /* Case : 1 The uncle of node is also red Only Recoloring required */

          if (uncle !== null && uncle.color == RBColor.red) {
            grandParent.color = RBColor.red;
            parent.color = RBColor.black;
            uncle.color = RBColor.black;
            var flows = [grandParent, parent, uncle];

            this._pushRecolorFlows(flows);

            node = grandParent;
          } else {
            /* Case : 2 node is right child of its parent Left-rotation required */
            if (node === parent.right) {
              this._rotateLeft(parent);

              node = parent;
              parent = node.parent;
            }
            /* Case : 3  node is left child of its parent Right-rotation required */


            this._rotateRight(grandParent);

            this._swapColor(parent, grandParent);

            this._pushRecolorFlows([parent, grandParent]);

            node = parent;
          }
        } else {
          /* Case : B Parent of pt is right child of Grand-parent of pt */
          var _uncle = grandParent.left;

          if (_uncle !== null && _uncle.color == RBColor.red) {
            grandParent.color = RBColor.red;
            parent.color = RBColor.black;
            _uncle.color = RBColor.black;

            this._pushRecolorFlows([grandParent, parent, _uncle]);

            node = grandParent;
          } else {
            /* Case : 2 node is right child of its parent Left-rotation required */
            if (node === parent.left) {
              this._rotateRight(parent);

              node = parent;
              parent = node.parent;
            }
            /* Case : 3  node is left child of its parent Right-rotation required */


            this._rotateLeft(grandParent);

            this._swapColor(parent, grandParent);

            this._pushRecolorFlows([parent, grandParent]);

            node = parent;
          }
        }
      }

      if (this.root) {
        this.root.color = RBColor.black;

        this._pushRecolorFlows([this.root]);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (this.root === null) return;
      this.dirtyFlows = [];
      var node = this.search(key, true);
      if (!node) return;

      this._deleteNode(node);

      return this.dirtyFlows;
    }
  }, {
    key: "search",
    value: function search(key, isAddtoDirty) {
      if (this.root === null) {
        return null;
      }

      var temp = this.root;

      while (temp) {
        if (key < temp.key) {
          if (temp.left === null) {
            break;
          } else {
            temp = temp.left;

            if (isAddtoDirty) {
              this.dirtyFlows.push([{
                node: temp,
                dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].visited
              }]);
            }
          }
        } else if (key > temp.key) {
          if (temp.right === null) {
            break;
          } else {
            temp = temp.right;

            if (isAddtoDirty) {
              this.dirtyFlows.push([{
                node: temp,
                dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].visited
              }]);
            }
          }
        } else {
          break;
        }
      }

      if (temp.key !== key) {
        return null;
      }

      return temp;
    }
  }, {
    key: "_deleteNode",
    value: function _deleteNode(node) {
      var replaceNode = this._BSTreplace(node);

      this.dirtyFlows.push([{
        node: replaceNode,
        dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].find,
        data: {
          text: 'replaceNode'
        }
      }]);
      var areBothBlack = (replaceNode === null || replaceNode.color === RBColor.black) && node.color === RBColor.black; // NOTICE replaceNode 选择不同会导致结果不同 也可以选择 predesuccor

      if (replaceNode === null) {
        // node is a leaf
        if (node === this.root) {
          this.root = null;
        } else {
          if (areBothBlack) {
            this._fixDoubleBlack(node);
          } else {
            if (node.sibling()) {
              node.sibling().color = RBColor.red;
            }
          }

          if (node.parent) {
            if (node.isOnLeft()) {
              node.parent.left = null;
            } else {
              node.parent.right = null;
            }
          }
        }

        return;
      } // one child


      if (node.left === null || node.right === null) {
        if (node === this.root) {
          node.key = replaceNode.key;
          node.left = node.right = null;
        } else {
          if (node.parent) {
            if (node.isOnLeft()) {
              node.parent.left = replaceNode;
            } else {
              node.parent.right = replaceNode;
            }
          }

          replaceNode.parent = node.parent;

          if (areBothBlack) {
            // TODO 这里一定不可能达到啊 如果只有一个child， replaceNode 也为黑，若replaceNode还有子节点，则在其他子节点路径必须还有黑，或者没有子节点，
            this._fixDoubleBlack(replaceNode);
          } else {
            replaceNode.color = RBColor.black;
          }
        }

        return;
      } // v has 2 children, swap values with successor and recurse


      this._swapKey(replaceNode, node);

      this._deleteNode(replaceNode);
    }
  }, {
    key: "_fixDoubleBlack",
    value: function _fixDoubleBlack(node) {
      if (node === null || node === this.root) return;
      var sibling = node.sibling();
      var parent = node.parent;

      if (!parent) {
        return;
      }

      if (!sibling) {
        this._fixDoubleBlack(parent);
      } else {
        if (sibling.color === RBColor.red) {
          parent.color = RBColor.red;
          sibling.color = RBColor.black;

          if (sibling.isOnLeft()) {
            this._rotateRight(parent);
          } else {
            this._rotateLeft(parent);
          }

          this._fixDoubleBlack(node);
        } else {
          if (sibling.hasRedChild()) {
            if (sibling.left && sibling.left.color === RBColor.red) {
              if (sibling.isOnLeft()) {
                sibling.left.color = sibling.color;
                sibling.color = parent.color;

                this._rotateRight(parent);
              } else {
                sibling.left.color = parent.color;

                this._rotateRight(sibling);

                this._rotateLeft(parent);
              }
            } else {
              if (sibling.isOnLeft()) {
                sibling.right.color = parent.color;

                this._rotateLeft(sibling);

                this._rotateRight(parent);
              } else {
                sibling.right.color = sibling.color;
                sibling.color = parent.color;

                this._rotateLeft(parent);
              }
            }

            parent.color = RBColor.black;
          } else {
            sibling.color = RBColor.red;

            if (parent.color === RBColor.black) {
              this._fixDoubleBlack(parent);
            } else {
              parent.color = RBColor.black;
            }
          }
        }
      }
    } // find node that replaces a deleted node in BST

  }, {
    key: "_BSTreplace",
    value: function _BSTreplace(node) {
      if (node.left && node.right) {
        return node.right.leftmost();
      }

      return node.left || node.right;
    } // private _BSTreplace2(node: RBNode) {
    //   if (node.left && node.right) {
    //     return node.left.rightmost();
    //   }
    //   return node.right || node.left;
    // }

  }, {
    key: "_BSTInsert",
    value: function _BSTInsert(root, node) {
      if (root === null) return node;

      if (node.key < root.key) {
        this.dirtyFlows.push([{
          node: root,
          dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].visited
        }]);
        root.left = this._BSTInsert(root.left, node);
        root.left.parent = root;
      } else if (node.key > root.key) {
        this.dirtyFlows.push([{
          node: root,
          dirtyType: _view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_10__["RBNodeDirtyType"].visited
        }]);
        root.right = this._BSTInsert(root.right, node);
        root.right.parent = root;
      }

      return root;
    }
  }]);

  return RedBlackTree;
}();
function checkInsert() {
  var rbt = new RedBlackTree();
  rbt.insert(20);
  rbt.insert(10);
  rbt.insert(14); // rbt.inorder();

  console.log('level order');
  rbt.levelOrder();
} // checkInsert();

function checkInsert2() {
  var rbt = new RedBlackTree();
  rbt.insert(5);
  rbt.insert(3);
  rbt.insert(8);
  rbt.insert(12);
  rbt.insert(7); // console.log(rbt.root);

  rbt.inorder();
  console.log('level order');
  rbt.levelOrder();
} // checkInsert2()

function checkDelete() {
  var tree = new RedBlackTree();
  tree.insert(7);
  tree.insert(3);
  tree.insert(18);
  tree.insert(10);
  tree.insert(22);
  tree.insert(8);
  tree.insert(11);
  tree.insert(26);
  tree.insert(2);
  tree.insert(6);
  tree.insert(13); // tree.inorder();
  // console.log('level order')
  // tree.levelOrder();

  tree.delete(18); // tree.delete(11);
  // tree.delete(3);
  // tree.delete(10);
  // tree.delete(22);
  // tree.inorder();

  console.log('level order');
  tree.levelOrder();
} // checkDelete();

function checkrotateLeft() {
  var node = new RBNode(10);
  node.left = new RBNode(8);
  node.left.parent = node;
  node.left.left = new RBNode(4);
  node.left.left.parent = node.left;
  node.left.right = new RBNode(15);
  node.left.right.parent = node.left;
  node.left.right.left = new RBNode(14);
  node.left.right.left.parent = node.left.right;
  var rbt = new RedBlackTree();
  rbt.root = node;
  var root = rbt.rotateLeft(node, node.left); // console.log(root.left, root.left.left, 'rootroot')

  rbt.root = root;
  rbt.levelOrder();
} // checkrotateLeft();

/***/ }),

/***/ "./src/util/traversal-helper.ts":
/*!**************************************!*\
  !*** ./src/util/traversal-helper.ts ***!
  \**************************************/
/*! exports provided: TraversalHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraversalHelper", function() { return TraversalHelper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _queue_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queue/queue */ "./src/queue/queue.ts");



var TraversalHelper =
/*#__PURE__*/
function () {
  function TraversalHelper() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TraversalHelper);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TraversalHelper, [{
    key: "inorder",
    value: function inorder(node) {
      this._inorderHelper(node);
    }
  }, {
    key: "_inorderHelper",
    value: function _inorderHelper(root, callback) {
      if (root === null) return;

      this._inorderHelper(root.left);

      if (callback) callback(root);
      console.log('node.key: ', root.key);

      this._inorderHelper(root.right);
    }
  }, {
    key: "inorderTraverse",
    value: function inorderTraverse(root, callback) {
      this._inorderHelper(root, callback);
    }
  }, {
    key: "levelOrderTraverse",
    value: function levelOrderTraverse(root, callback) {
      if (root === null) return;
      var queue = new _queue_queue__WEBPACK_IMPORTED_MODULE_2__["default"]();
      queue.push(root);
      console.time('levelOrderTraverse');

      var _loop = function _loop() {
        var temp = queue.pop(); // console.time('callback')

        setTimeout(function () {
          return callback(temp);
        }, 1); // console.timeEnd('callback')

        if (temp.left !== null) {
          queue.push(temp.left);
        }

        if (temp.right !== null) {
          queue.push(temp.right);
        }
      };

      while (!queue.empty()) {
        _loop();
      }

      console.timeEnd('levelOrderTraverse');
    }
  }, {
    key: "levelOrder",
    value: function levelOrder(root) {
      if (root === null) return;
      var queue = new _queue_queue__WEBPACK_IMPORTED_MODULE_2__["default"]();
      queue.push(root);
      console.time('levelOrder-time');

      while (!queue.empty()) {
        var temp = queue.pop();
        console.log('node.key: ', temp.key);

        if (temp.left !== null) {
          queue.push(temp.left);
        }

        if (temp.right !== null) {
          queue.push(temp.right);
        }
      }

      console.timeEnd('levelOrder-time');
    }
  }]);

  return TraversalHelper;
}();

/***/ }),

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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_5__);







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
          FontManager.frontMap.set(type, result);
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



/***/ }),

/***/ "./src/view/tree/animator/animator-base.ts":
/*!*************************************************!*\
  !*** ./src/view/tree/animator/animator-base.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimatorBase; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var AnimatorBase =
/*#__PURE__*/
function () {
  function AnimatorBase(node) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimatorBase);

    this._node = node;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatorBase, [{
    key: "animate",
    value: function animate() {
      return false;
    }
  }]);

  return AnimatorBase;
}();



/***/ }),

/***/ "./src/view/tree/animator/recolor-animator.ts":
/*!****************************************************!*\
  !*** ./src/view/tree/animator/recolor-animator.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecolorNodeAnimator; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _animator_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animator-base */ "./src/view/tree/animator/animator-base.ts");










var RecolorNodeAnimator =
/*#__PURE__*/
function (_AnimatorBase) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RecolorNodeAnimator, _AnimatorBase);

  function RecolorNodeAnimator(node, mesh, changeToColor, duration) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RecolorNodeAnimator);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RecolorNodeAnimator).call(this, node));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "END_FRAME", 20);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_frame", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_colorChanged", false);

    _this._mesh = mesh;
    _this._changeToColor = changeToColor;

    if (duration) {
      _this.END_FRAME = duration;
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RecolorNodeAnimator, [{
    key: "_changeColor",
    value: function _changeColor() {
      if (this._colorChanged) {
        return;
      }

      if (this._mesh.material instanceof three__WEBPACK_IMPORTED_MODULE_7__["MeshPhongMaterial"]) {
        this._mesh.material.color.setHex(this._changeToColor);

        this._colorChanged = true;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this._frame < this.END_FRAME) {
        this._frame++;

        this._changeColor();

        return true;
      }

      return false;
    }
  }]);

  return RecolorNodeAnimator;
}(_animator_base__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/view/tree/animator/rotated-animator.ts":
/*!****************************************************!*\
  !*** ./src/view/tree/animator/rotated-animator.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RotatedAnimator; });
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _animator_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animator-base */ "./src/view/tree/animator/animator-base.ts");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mesh */ "./src/view/tree/mesh/index.ts");
/* harmony import */ var _font_font_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../font/font-manager */ "./src/view/font/font-manager.ts");
/* harmony import */ var _red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../red-black-tree-viewobject */ "./src/view/tree/red-black-tree-viewobject.ts");















var RotatedAnimator =
/*#__PURE__*/
function (_AnimatorBase) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RotatedAnimator, _AnimatorBase);

  function RotatedAnimator(node, dirtyType, map, duration) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RotatedAnimator);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RotatedAnimator).call(this, node));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "END_FRAME", 40);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_frame", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_textMap", new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_initRotateInfoMap", new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a());

    _this._viewObjectMap = map;
    _this._dirtyType = dirtyType;

    if (duration) {
      _this.END_FRAME = duration;
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RotatedAnimator, [{
    key: "_rotateNode",
    value: function _rotateNode(node, dirtyDirection, isOriginChild) {
      var nodeViewObject = this._viewObjectMap.get(node.key);

      if (!nodeViewObject) {
        return;
      }

      nodeViewObject.mesh.children.forEach(function (child) {
        if (child.userData.isConnectLine) {
          nodeViewObject.mesh.remove(child);
        }
      });
      var isLeftRotate = dirtyDirection === _red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__["RBNodeDirtyType"].leftRotated;
      var radius = Math.sqrt(Math.pow(_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__["RedBlackTreeViewObject"].horizontalOffset / 2, 2) + Math.pow(_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__["RedBlackTreeViewObject"].verticalOffset / 2, 2));
      var sign = isLeftRotate ? -1 : 1;

      var initInfo = this._initRotateInfoMap.get(node.key);

      if (!initInfo) {
        var childSign = isOriginChild ? -1 : 1;
        var initCircleCenter = nodeViewObject.mesh.position.clone().sub(new three__WEBPACK_IMPORTED_MODULE_8__["Vector3"](-1 * sign * _red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__["RedBlackTreeViewObject"].horizontalOffset / 2, childSign * _red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__["RedBlackTreeViewObject"].verticalOffset / 2, 0));
        var distance = new three__WEBPACK_IMPORTED_MODULE_8__["Vector3"]().subVectors(nodeViewObject.mesh.position, initCircleCenter.clone().add(new three__WEBPACK_IMPORTED_MODULE_8__["Vector3"](radius, 0, 0))).length();

        var _initAngle = childSign * Math.acos((2 * radius * radius - distance * distance) / (2 * radius * radius));

        initInfo = {
          center: initCircleCenter,
          initAngle: _initAngle
        };

        this._initRotateInfoMap.set(node.key, initInfo);
      }

      var animateAngle = -1 * sign * this._frame * Math.PI / this.END_FRAME;
      var x = initInfo.center.x + radius * Math.cos(animateAngle + initInfo.initAngle);
      var y = initInfo.center.y + radius * Math.sin(animateAngle + initInfo.initAngle);
      var newPosition = new three__WEBPACK_IMPORTED_MODULE_8__["Vector3"](x, y, nodeViewObject.mesh.position.z);
      nodeViewObject.mesh.position.copy(newPosition);
      node.userData.position = newPosition;

      this._addText(node.key);

      this._refreshNodeConnectLine(node);
    }
  }, {
    key: "_refreshNodeConnectLine",
    value: function _refreshNodeConnectLine(node) {
      if (!node) {
        return;
      }

      var nodeViewObject = this._viewObjectMap.get(node.key);

      if (!nodeViewObject) {
        return;
      }

      nodeViewObject.mesh.children.forEach(function (child) {
        if (child instanceof three__WEBPACK_IMPORTED_MODULE_8__["Line"]) {
          nodeViewObject.mesh.remove(child);
        }
      });
      var line = Object(_mesh__WEBPACK_IMPORTED_MODULE_10__["getConnectLineMesh"])(nodeViewObject.mesh);

      if (line) {
        nodeViewObject.mesh.add(line);
      }
    }
  }, {
    key: "_keepChildTrack",
    value: function _keepChildTrack(node) {
      if (node === null) {
        return;
      }

      if (!node.parent) {
        return;
      }

      var nodeViewObject = this._viewObjectMap.get(node.key);

      var parentViewObject = this._viewObjectMap.get(node.parent.key);

      if (!parentViewObject || !nodeViewObject) {
        return;
      }

      nodeViewObject.mesh.position.copy(_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__["RedBlackTreeViewObject"].getChildPosition(node, parentViewObject.mesh.position));

      this._refreshNodeConnectLine(node);

      if (node.left) {
        this._keepChildTrack(node.left);
      }

      if (node.right) {
        this._keepChildTrack(node.right);
      }
    }
  }, {
    key: "_rotate",
    value: function _rotate() {
      var self = this._node;
      var parent = self.parent;

      if (!parent) {
        return;
      }

      var nodeViewObject = this._viewObjectMap.get(self.key);

      var parentViewObject = this._viewObjectMap.get(parent.key);

      if (!nodeViewObject || !parentViewObject) {
        return;
      }

      this._rotateNode(self, this._dirtyType);

      this._rotateNode(parent, this._dirtyType, true);

      this._keepChildTrack(self.left);

      this._keepChildTrack(self.right);

      if (self.isOnLeft()) {
        this._keepChildTrack(parent.right);
      } else {
        this._keepChildTrack(parent.left);
      }
    }
  }, {
    key: "_addText",
    value: function _addText(nodeKey) {
      if (this._textMap.has(nodeKey)) {
        return;
      }

      var nodeViewObject = this._viewObjectMap.get(nodeKey);

      if (!nodeViewObject) {
        return;
      }

      var textGeo = new three__WEBPACK_IMPORTED_MODULE_8__["TextGeometry"]("".concat(this._dirtyType === _red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_12__["RBNodeDirtyType"].leftRotated ? 'Left-Rotating' : 'Right-Rotating'), {
        height: 0,
        size: 20,
        font: _font_font_manager__WEBPACK_IMPORTED_MODULE_11__["default"].getFont('helv')
      });
      var text = new three__WEBPACK_IMPORTED_MODULE_8__["Mesh"](textGeo, new three__WEBPACK_IMPORTED_MODULE_8__["MeshBasicMaterial"]({
        color: 0x000000
      }));
      text.position.y += 80;
      text.position.x += 60;
      text.userData.isTextNode = true;
      text.userData.immutable = true;
      nodeViewObject.mesh.add(text);

      this._textMap.set(nodeKey, nodeViewObject.mesh);
    }
  }, {
    key: "_resetText",
    value: function _resetText() {
      this._textMap.forEach(function (pmesh) {
        pmesh.children.forEach(function (child) {
          if (child.userData.isTextNode) {
            pmesh.remove(child);
          }
        });
      });

      this._textMap.clear();
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this._frame < this.END_FRAME) {
        this._frame++;

        this._rotate();

        return true;
      } else if (this._frame >= this.END_FRAME) {
        this._initRotateInfoMap.clear();

        this._resetText();
      }

      return false;
    }
  }]);

  return RotatedAnimator;
}(_animator_base__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/view/tree/animator/show-text-animator.ts":
/*!******************************************************!*\
  !*** ./src/view/tree/animator/show-text-animator.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowTextAnimator; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _animator_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animator-base */ "./src/view/tree/animator/animator-base.ts");
/* harmony import */ var _font_font_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../font/font-manager */ "./src/view/font/font-manager.ts");











var ShowTextAnimator =
/*#__PURE__*/
function (_AnimatorBase) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShowTextAnimator, _AnimatorBase);

  function ShowTextAnimator(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShowTextAnimator);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShowTextAnimator).call(this, props.node));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_frame", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "END_FRAME", 20);

    _this._props = props;

    if (props.duration) {
      _this.END_FRAME = props.duration;
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShowTextAnimator, [{
    key: "_addText",
    value: function _addText() {
      if (this._textMesh) {
        return;
      }

      var parameters = this._props.parameters || {};
      var height = parameters.height,
          size = parameters.size,
          font = parameters.font;
      var textGeo = new three__WEBPACK_IMPORTED_MODULE_7__["TextGeometry"](this._props.text, {
        height: height === undefined ? 0 : height,
        size: size === undefined ? 20 : size,
        font: font || _font_font_manager__WEBPACK_IMPORTED_MODULE_9__["default"].getFont('helv')
      });
      var textMesh = new three__WEBPACK_IMPORTED_MODULE_7__["Mesh"](textGeo, new three__WEBPACK_IMPORTED_MODULE_7__["MeshBasicMaterial"]({
        color: 0x000000
      }));
      textMesh.position.y += 20;
      textMesh.position.x += 50;
      this._textMesh = textMesh;

      this._props.mesh.add(textMesh);
    }
  }, {
    key: "_resetText",
    value: function _resetText() {
      if (this._textMesh) {
        this._props.mesh.remove(this._textMesh);
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      console.log(this._frame, 'this._animatorFlows');

      if (this._frame < this.END_FRAME) {
        this._frame++;

        this._addText();

        return true;
      } else if (this._frame >= this.END_FRAME) {
        this._resetText();
      }

      return false;
    }
  }]);

  return ShowTextAnimator;
}(_animator_base__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/view/tree/animator/visited-node-animator.ts":
/*!*********************************************************!*\
  !*** ./src/view/tree/animator/visited-node-animator.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisitedNodeAnimator; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _animator_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animator-base */ "./src/view/tree/animator/animator-base.ts");










var VisitedNodeAnimator =
/*#__PURE__*/
function (_AnimatorBase) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(VisitedNodeAnimator, _AnimatorBase);

  function VisitedNodeAnimator(node, mesh, duration) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VisitedNodeAnimator);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(VisitedNodeAnimator).call(this, node));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "END_FRAME", 20);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_frame", 0);

    _this._mesh = mesh;

    if (duration) {
      _this.END_FRAME = duration;
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VisitedNodeAnimator, [{
    key: "_changeColor",
    value: function _changeColor() {
      if (!this._oldColor) {
        this._oldColor = this._mesh.material.color;
        this._mesh.material.color = new three__WEBPACK_IMPORTED_MODULE_7__["Color"](0x00ff00);
      }
    }
  }, {
    key: "_resetColor",
    value: function _resetColor() {
      if (this._oldColor) {
        this._mesh.material.color = this._oldColor;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this._frame < this.END_FRAME) {
        this._frame++;

        this._changeColor();

        return true;
      } else if (this._frame >= this.END_FRAME) {
        this._resetColor();
      }

      return false;
    }
  }]);

  return VisitedNodeAnimator;
}(_animator_base__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/view/tree/mesh/index.ts":
/*!*************************************!*\
  !*** ./src/view/tree/mesh/index.ts ***!
  \*************************************/
/*! exports provided: getSphereNode, getConnectLineMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSphereNode", function() { return getSphereNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectLineMesh", function() { return getConnectLineMesh; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tree_red_black_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../tree/red-black-tree */ "./src/tree/red-black-tree.ts");


function getSphereNode(node, font) {
  if (node === null) {
    return;
  }

  var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](30, 30, 30);
  var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]({
    color: node.color === _tree_red_black_tree__WEBPACK_IMPORTED_MODULE_1__["RBColor"].black ? 0x000000 : 0xff0000
  });
  var mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);

  if (font) {
    var textGeo = new three__WEBPACK_IMPORTED_MODULE_0__["TextGeometry"]("".concat(node.key), {
      height: 0,
      size: 20,
      font: font
    });
    var text = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](textGeo, new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
      color: 0x000000
    }));
    text.position.y += 50;
    text.position.x -= 20;
    mesh.add(text);
  }

  mesh.userData.node = node;
  return mesh;
}
function getConnectLineMesh(sphereNode) {
  var parent = sphereNode.userData.node && sphereNode.userData.node.parent;
  var parentPosition = parent && parent.userData.position;

  if (!parentPosition) {
    return;
  }

  var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
  geometry.vertices.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](), new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]().subVectors(parentPosition, sphereNode.position));
  var line = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](geometry, new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({
    color: 0x000000
  }));
  return line;
}

/***/ }),

/***/ "./src/view/tree/red-black-tree-viewobject.ts":
/*!****************************************************!*\
  !*** ./src/view/tree/red-black-tree-viewobject.ts ***!
  \****************************************************/
/*! exports provided: RBNodeDirtyType, RBNodeViewObject, RedBlackTreeViewObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBNodeDirtyType", function() { return RBNodeDirtyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBNodeViewObject", function() { return RBNodeViewObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedBlackTreeViewObject", function() { return RedBlackTreeViewObject; });
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_message_style_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/message/style/index.css */ "./node_modules/antd/lib/message/style/index.css");
/* harmony import */ var antd_lib_message_style_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _font_font_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../font/font-manager */ "./src/view/font/font-manager.ts");
/* harmony import */ var _tree_red_black_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../tree/red-black-tree */ "./src/tree/red-black-tree.ts");
/* harmony import */ var _animator_rotated_animator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animator/rotated-animator */ "./src/view/tree/animator/rotated-animator.ts");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mesh */ "./src/view/tree/mesh/index.ts");
/* harmony import */ var _animator_recolor_animator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./animator/recolor-animator */ "./src/view/tree/animator/recolor-animator.ts");
/* harmony import */ var _animator_visited_node_animator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./animator/visited-node-animator */ "./src/view/tree/animator/visited-node-animator.ts");
/* harmony import */ var _animator_show_text_animator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./animator/show-text-animator */ "./src/view/tree/animator/show-text-animator.ts");


















var RBNodeDirtyType;

(function (RBNodeDirtyType) {
  RBNodeDirtyType["none"] = "NONE";
  RBNodeDirtyType["find"] = "FIND";
  RBNodeDirtyType["insert"] = "INSERT";
  RBNodeDirtyType["visited"] = "VISITED";
  RBNodeDirtyType["recolor"] = "RECOLOR";
  RBNodeDirtyType["leftRotated"] = "LEFTROTATED";
  RBNodeDirtyType["rightRotated"] = "RIGHTROTATED";
})(RBNodeDirtyType || (RBNodeDirtyType = {}));

var RBNodeViewObject =
/*#__PURE__*/
function () {
  function RBNodeViewObject(node, mesh) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RBNodeViewObject);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "dirty", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "_dirtyFrame", 0);

    this.mesh = mesh;
    this.node = node;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RBNodeViewObject, [{
    key: "onDirtyAnimate",
    value: function onDirtyAnimate(onEnd) {
      if (this.dirty && this._dirtyFrame < RBNodeViewObject.DirtyMaxFrame) {
        if (!this._oldColor) {
          this._oldColor = this.mesh.material.color;
        }

        this.mesh.material.color = new three__WEBPACK_IMPORTED_MODULE_8__["Color"](0x00ff00);
        this._dirtyFrame++;
      } else if (this._dirtyFrame >= RBNodeViewObject.DirtyMaxFrame) {
        this._dirtyFrame = 0;
        this.dirty = false;
        this.mesh.material.color = this._oldColor;
        this._oldColor = undefined;
        onEnd();
      }
    }
  }]);

  return RBNodeViewObject;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RBNodeViewObject, "DirtyMaxFrame", 20);

var RedBlackTreeViewObject =
/*#__PURE__*/
function (_THREE$Object3D) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RedBlackTreeViewObject, _THREE$Object3D);

  function RedBlackTreeViewObject(app, tree) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RedBlackTreeViewObject);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(RedBlackTreeViewObject).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_animatorFlows", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_nodeViewObjectMap", new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_currentEndAnimatorsLength", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_enterAnimating", false);

    _this._app = app;
    _this.tree = tree;
    tree.levelOrderTraverse(function (node) {
      _this.addNode(node);
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RedBlackTreeViewObject, [{
    key: "addNode",
    value: function addNode(node) {
      var sphereNode = Object(_mesh__WEBPACK_IMPORTED_MODULE_14__["getSphereNode"])(node, _font_font_manager__WEBPACK_IMPORTED_MODULE_11__["default"].getFont('helv'));

      if (sphereNode) {
        var rbNode = sphereNode.userData.node;
        var parentPosition = rbNode && rbNode.parent && rbNode.parent.userData.position;
        sphereNode.position.copy(RedBlackTreeViewObject.getChildPosition(rbNode, parentPosition));
        node.userData.position = sphereNode.position;
        var line = Object(_mesh__WEBPACK_IMPORTED_MODULE_14__["getConnectLineMesh"])(sphereNode);

        if (line) {
          line.userData.isConnectLine = true;
          sphereNode.add(line);
        }

        this._nodeViewObjectMap.set(node.key, new RBNodeViewObject(node, sphereNode));

        this.add(sphereNode);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      // 这里的写法有问题，应该先操作，然后标记对应的节点，按照顺序执行节点动画
      // [ [ ...node], [], []]，前一组执行完才执行下一组
      if (this._animatorFlows.length) {
        this._enterAnimating = true;

        this._animatorFlows.forEach(function (animators, index) {
          if (!animators.length) {
            _this2._animatorFlows.shift();
          } else {
            if (index === 0) {
              if (!_this2._currentActiveAnimatorsLength) {
                _this2._currentActiveAnimatorsLength = animators.length;
              }

              console.log(animators, 'animators');
              animators.forEach(function (animator) {
                var isAnimating = animator.animate();

                if (!isAnimating) {
                  _this2._currentEndAnimatorsLength++;

                  if (_this2._currentEndAnimatorsLength === _this2._currentActiveAnimatorsLength) {
                    _this2._animatorFlows.shift();

                    _this2._currentEndAnimatorsLength = 0;
                    _this2._currentActiveAnimatorsLength = undefined;
                  }
                }
              });
            }
          }
        });
      } else {
        if (this._enterAnimating) {
          antd__WEBPACK_IMPORTED_MODULE_9__["message"].info('Operation Done!', 0.1);
          this._enterAnimating = false;

          this._app.eventManager.emitOperationDone();
        }
      }
    }
  }, {
    key: "_dityFlowsAnimationFlow",
    value: function _dityFlowsAnimationFlow(dirtyNodesFlows) {
      var _this3 = this;

      var logs = [];
      this._animatorFlows = [];
      dirtyNodesFlows.forEach(function (nodeArray) {
        logs.push(nodeArray.map(function (n) {
          return {
            dt: n.dirtyType,
            node: n.node
          };
        }));
        var animators = [];
        nodeArray.forEach(function (info) {
          switch (info.dirtyType) {
            case RBNodeDirtyType.visited:
              {
                if (!info.node) break;

                var viewobject = _this3._nodeViewObjectMap.get(info.node.key);

                if (viewobject) {
                  animators.push(new _animator_show_text_animator__WEBPACK_IMPORTED_MODULE_17__["default"]({
                    node: info.node,
                    text: 'Visited',
                    mesh: viewobject.mesh
                  }));
                  animators.push(new _animator_visited_node_animator__WEBPACK_IMPORTED_MODULE_16__["default"](info.node, viewobject.mesh));
                }

                break;
              }

            case RBNodeDirtyType.recolor:
              {
                if (!info.node) break;

                var _viewobject = _this3._nodeViewObjectMap.get(info.node.key);

                if (_viewobject) {
                  animators.push(new _animator_show_text_animator__WEBPACK_IMPORTED_MODULE_17__["default"]({
                    node: info.node,
                    text: 'ReColor',
                    mesh: _viewobject.mesh
                  }));
                  var isBlack = info.node.color === _tree_red_black_tree__WEBPACK_IMPORTED_MODULE_12__["RBColor"].black;
                  var color = isBlack ? 0x000000 : 0xff0000;
                  animators.push(new _animator_recolor_animator__WEBPACK_IMPORTED_MODULE_15__["default"](info.node, _viewobject.mesh, color));
                }

                break;
              }

            case RBNodeDirtyType.rightRotated:
            case RBNodeDirtyType.leftRotated:
              {
                if (!info.node) break;
                animators.push(new _animator_rotated_animator__WEBPACK_IMPORTED_MODULE_13__["default"](info.node, info.dirtyType, _this3._nodeViewObjectMap));
                break;
              }

            case RBNodeDirtyType.find:
              {// animators.push(new FindAnimator(
                //   info.node,
                //   this.font,
                // ));
              }
          }
        });

        _this3._animatorFlows.push(animators);
      });
      console.log(logs, 'log');
      console.log(this._animatorFlows, 'this._animatorFlows');
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var _this4 = this;

      if (!this.tree.root) {
        this.tree.insert(key);
        this.addNode(new _tree_red_black_tree__WEBPACK_IMPORTED_MODULE_12__["RBNode"](key));
        return;
      }

      if (this.tree.search(key)) {
        return;
      }

      var dirtyNodesFlows = this.tree.insert(key, function (r) {
        _this4.addNode(r);
      });

      this._dityFlowsAnimationFlow(dirtyNodesFlows);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.tree.root) {
        return;
      }

      var dirtyNodesFlows = this.tree.delete(key);

      if (dirtyNodesFlows) {
        this._dityFlowsAnimationFlow(dirtyNodesFlows);
      }
    }
  }], [{
    key: "getChildPosition",
    value: function getChildPosition(rbNode, parentPosition) {
      if (!parentPosition) {
        return RedBlackTreeViewObject.originPosition;
      } else {
        var position = parentPosition.clone();
        position.y -= RedBlackTreeViewObject.verticalOffset;

        if (rbNode.isOnLeft()) {
          position.x -= RedBlackTreeViewObject.horizontalOffset;

          if (rbNode.sibling() && rbNode.hasChild()) {
            position.x -= RedBlackTreeViewObject.horizontalOffset;
          }
        } else {
          position.x += RedBlackTreeViewObject.horizontalOffset;

          if (rbNode.sibling() && rbNode.hasChild()) {
            position.x += RedBlackTreeViewObject.horizontalOffset;
          }
        }

        return position;
      }
    }
  }]);

  return RedBlackTreeViewObject;
}(three__WEBPACK_IMPORTED_MODULE_8__["Object3D"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RedBlackTreeViewObject, "originPosition", new three__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 400, 0));

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RedBlackTreeViewObject, "horizontalOffset", 80);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RedBlackTreeViewObject, "verticalOffset", 160);

/***/ }),

/***/ "./static/js/orbitcontrol.js":
/*!***********************************!*\
  !*** ./static/js/orbitcontrol.js ***!
  \***********************************/
/*! exports provided: OrbitControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitControls", function() { return OrbitControls; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
 // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

function OrbitControls(object, domElement) {
  this.object = object;
  this.domElement = domElement !== undefined ? domElement : document; // Set to false to disable this control

  this.enabled = true; // "target" sets the location of focus, where the object orbits around

  this.target = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](); // How far you can dolly in and out ( PerspectiveCamera only )

  this.minDistance = 0;
  this.maxDistance = Infinity; // How far you can zoom in and out ( OrthographicCamera only )

  this.minZoom = 0;
  this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.

  this.minPolarAngle = 0; // radians

  this.maxPolarAngle = Math.PI; // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].

  this.minAzimuthAngle = -Infinity; // radians

  this.maxAzimuthAngle = Infinity; // radians
  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop

  this.enableDamping = false;
  this.dampingFactor = 0.25; // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming

  this.enableZoom = true;
  this.zoomSpeed = 1.0; // Set to false to disable rotating

  this.enableRotate = true;
  this.rotateSpeed = 1.0; // Set to false to disable panning

  this.enablePan = true;
  this.panSpeed = 1.0;
  this.screenSpacePanning = false; // if true, pan in screen-space

  this.keyPanSpeed = 7.0; // pixels moved per arrow key push
  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop

  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
  // Set to false to disable use of the keys

  this.enableKeys = true; // The four arrow keys

  this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }; // Mouse buttons

  this.mouseButtons = {
    LEFT: three__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LEFT,
    MIDDLE: three__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].MIDDLE,
    RIGHT: three__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].RIGHT
  }; // for reset

  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom; //
  // public methods
  //

  this.getPolarAngle = function () {
    return spherical.phi;
  };

  this.getAzimuthalAngle = function () {
    return spherical.theta;
  };

  this.saveState = function () {
    scope.target0.copy(scope.target);
    scope.position0.copy(scope.object.position);
    scope.zoom0 = scope.object.zoom;
  };

  this.reset = function () {
    scope.target.copy(scope.target0);
    scope.object.position.copy(scope.position0);
    scope.object.zoom = scope.zoom0;
    scope.object.updateProjectionMatrix();
    scope.dispatchEvent(changeEvent);
    scope.update();
    state = STATE.NONE;
  }; // this method is exposed, but perhaps it would be better if we can make it private...


  this.update = function () {
    var offset = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](); // so camera.up is the orbit axis

    var quat = new three__WEBPACK_IMPORTED_MODULE_2__["Quaternion"]().setFromUnitVectors(object.up, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0));
    var quatInverse = quat.clone().inverse();
    var lastPosition = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]();
    var lastQuaternion = new three__WEBPACK_IMPORTED_MODULE_2__["Quaternion"]();
    return function update() {
      var position = scope.object.position;
      offset.copy(position).sub(scope.target); // rotate offset to "y-axis-is-up" space

      offset.applyQuaternion(quat); // angle from z-axis around y-axis

      spherical.setFromVector3(offset);

      if (scope.autoRotate && state === STATE.NONE) {
        rotateLeft(getAutoRotationAngle());
      }

      spherical.theta += sphericalDelta.theta;
      spherical.phi += sphericalDelta.phi; // restrict theta to be between desired limits

      spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta)); // restrict phi to be between desired limits

      spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
      spherical.makeSafe();
      spherical.radius *= scale; // restrict radius to be between desired limits

      spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); // move target to panned location

      scope.target.add(panOffset);
      offset.setFromSpherical(spherical); // rotate offset back to "camera-up-vector-is-up" space

      offset.applyQuaternion(quatInverse);
      position.copy(scope.target).add(offset);
      scope.object.lookAt(scope.target);

      if (scope.enableDamping === true) {
        sphericalDelta.theta *= 1 - scope.dampingFactor;
        sphericalDelta.phi *= 1 - scope.dampingFactor;
        panOffset.multiplyScalar(1 - scope.dampingFactor);
      } else {
        sphericalDelta.set(0, 0, 0);
        panOffset.set(0, 0, 0);
      }

      scale = 1; // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8

      if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
        scope.dispatchEvent(changeEvent);
        lastPosition.copy(scope.object.position);
        lastQuaternion.copy(scope.object.quaternion);
        zoomChanged = false;
        return true;
      }

      return false;
    };
  }();

  this.dispose = function () {
    scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
    scope.domElement.removeEventListener('mousedown', onMouseDown, false);
    scope.domElement.removeEventListener('wheel', onMouseWheel, false);
    scope.domElement.removeEventListener('touchstart', onTouchStart, false);
    scope.domElement.removeEventListener('touchend', onTouchEnd, false);
    scope.domElement.removeEventListener('touchmove', onTouchMove, false);
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    window.removeEventListener('keydown', onKeyDown, false); //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
  }; //
  // internals
  //


  var scope = this;
  var changeEvent = {
    type: 'change'
  };
  var startEvent = {
    type: 'start'
  };
  var endEvent = {
    type: 'end'
  };
  var STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_DOLLY_PAN: 4
  };
  var state = STATE.NONE;
  var EPS = 0.000001; // current position in spherical coordinates

  var spherical = new three__WEBPACK_IMPORTED_MODULE_2__["Spherical"]();
  var sphericalDelta = new three__WEBPACK_IMPORTED_MODULE_2__["Spherical"]();
  var scale = 1;
  var panOffset = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]();
  var zoomChanged = false;
  var rotateStart = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var rotateEnd = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var rotateDelta = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var panStart = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var panEnd = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var panDelta = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var dollyStart = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var dollyEnd = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
  var dollyDelta = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();

  function getAutoRotationAngle() {
    return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
  }

  function getZoomScale() {
    return Math.pow(0.95, scope.zoomSpeed);
  }

  function rotateLeft(angle) {
    sphericalDelta.theta -= angle;
  }

  function rotateUp(angle) {
    sphericalDelta.phi -= angle;
  }

  var panLeft = function () {
    var v = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]();
    return function panLeft(distance, objectMatrix) {
      v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix

      v.multiplyScalar(-distance);
      panOffset.add(v);
    };
  }();

  var panUp = function () {
    var v = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]();
    return function panUp(distance, objectMatrix) {
      if (scope.screenSpacePanning === true) {
        v.setFromMatrixColumn(objectMatrix, 1);
      } else {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.crossVectors(scope.object.up, v);
      }

      v.multiplyScalar(distance);
      panOffset.add(v);
    };
  }(); // deltaX and deltaY are in pixels; right and down are positive


  var pan = function () {
    var offset = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]();
    return function pan(deltaX, deltaY) {
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (scope.object.isPerspectiveCamera) {
        // perspective
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);
        var targetDistance = offset.length(); // half of the fov is center to top of screen

        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we use only clientHeight here so aspect ratio does not distort speed

        panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
      } else if (scope.object.isOrthographicCamera) {
        // orthographic
        panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
        panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
      } else {
        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        scope.enablePan = false;
      }
    };
  }();

  function dollyIn(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale /= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  }

  function dollyOut(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale *= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  } //
  // event callbacks - update the object state
  //


  function handleMouseDownRotate(event) {
    //console.log( 'handleMouseDownRotate' );
    rotateStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownDolly(event) {
    //console.log( 'handleMouseDownDolly' );
    dollyStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownPan(event) {
    //console.log( 'handleMouseDownPan' );
    panStart.set(event.clientX, event.clientY);
  }

  function handleMouseMoveRotate(event) {
    //console.log( 'handleMouseMoveRotate' );
    rotateEnd.set(event.clientX, event.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
    var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
    rotateStart.copy(rotateEnd);
    scope.update();
  }

  function handleMouseMoveDolly(event) {
    //console.log( 'handleMouseMoveDolly' );
    dollyEnd.set(event.clientX, event.clientY);
    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {
      dollyIn(getZoomScale());
    } else if (dollyDelta.y < 0) {
      dollyOut(getZoomScale());
    }

    dollyStart.copy(dollyEnd);
    scope.update();
  }

  function handleMouseMovePan(event) {
    //console.log( 'handleMouseMovePan' );
    panEnd.set(event.clientX, event.clientY);
    panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
    scope.update();
  }

  function handleMouseUp(event) {// console.log( 'handleMouseUp' );
  }

  function handleMouseWheel(event) {
    // console.log( 'handleMouseWheel' );
    if (event.deltaY < 0) {
      dollyOut(getZoomScale());
    } else if (event.deltaY > 0) {
      dollyIn(getZoomScale());
    }

    scope.update();
  }

  function handleKeyDown(event) {
    // console.log( 'handleKeyDown' );
    var needsUpdate = false;

    switch (event.keyCode) {
      case scope.keys.UP:
        pan(0, scope.keyPanSpeed);
        needsUpdate = true;
        break;

      case scope.keys.BOTTOM:
        pan(0, -scope.keyPanSpeed);
        needsUpdate = true;
        break;

      case scope.keys.LEFT:
        pan(scope.keyPanSpeed, 0);
        needsUpdate = true;
        break;

      case scope.keys.RIGHT:
        pan(-scope.keyPanSpeed, 0);
        needsUpdate = true;
        break;
    }

    if (needsUpdate) {
      // prevent the browser from scrolling on cursor keys
      event.preventDefault();
      scope.update();
    }
  }

  function handleTouchStartRotate(event) {
    //console.log( 'handleTouchStartRotate' );
    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
  }

  function handleTouchStartDollyPan(event) {
    //console.log( 'handleTouchStartDollyPan' );
    if (scope.enableZoom) {
      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }

    if (scope.enablePan) {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      panStart.set(x, y);
    }
  }

  function handleTouchMoveRotate(event) {
    //console.log( 'handleTouchMoveRotate' );
    rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
    var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
    rotateStart.copy(rotateEnd);
    scope.update();
  }

  function handleTouchMoveDollyPan(event) {
    //console.log( 'handleTouchMoveDollyPan' );
    if (scope.enableZoom) {
      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyIn(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }

    if (scope.enablePan) {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      panEnd.set(x, y);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }

    scope.update();
  }

  function handleTouchEnd(event) {} //console.log( 'handleTouchEnd' );
  //
  // event handlers - FSM: listen for events and reset state
  //


  function onMouseDown(event) {
    if (scope.enabled === false) return; // Prevent the browser from scrolling.

    event.preventDefault(); // Manually set the focus since calling preventDefault above
    // prevents the browser from setting it automatically.

    scope.domElement.focus ? scope.domElement.focus() : window.focus();

    switch (event.button) {
      case scope.mouseButtons.LEFT:
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          if (scope.enablePan === false) return;
          handleMouseDownPan(event);
          state = STATE.PAN;
        } else {
          if (scope.enableRotate === false) return;
          handleMouseDownRotate(event);
          state = STATE.ROTATE;
        }

        break;

      case scope.mouseButtons.MIDDLE:
        if (scope.enableZoom === false) return;
        handleMouseDownDolly(event);
        state = STATE.DOLLY;
        break;

      case scope.mouseButtons.RIGHT:
        if (scope.enablePan === false) return;
        handleMouseDownPan(event);
        state = STATE.PAN;
        break;
    }

    if (state !== STATE.NONE) {
      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mouseup', onMouseUp, false);
      scope.dispatchEvent(startEvent);
    }
  }

  function onMouseMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();

    switch (state) {
      case STATE.ROTATE:
        if (scope.enableRotate === false) return;
        handleMouseMoveRotate(event);
        break;

      case STATE.DOLLY:
        if (scope.enableZoom === false) return;
        handleMouseMoveDolly(event);
        break;

      case STATE.PAN:
        if (scope.enablePan === false) return;
        handleMouseMovePan(event);
        break;
    }
  }

  function onMouseUp(event) {
    if (scope.enabled === false) return;
    handleMouseUp(event);
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onMouseWheel(event) {
    if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
    event.preventDefault();
    event.stopPropagation();
    scope.dispatchEvent(startEvent);
    handleMouseWheel(event);
    scope.dispatchEvent(endEvent);
  }

  function onKeyDown(event) {
    if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
    handleKeyDown(event);
  }

  function onTouchStart(event) {
    if (scope.enabled === false) return;
    event.preventDefault();

    switch (event.touches.length) {
      case 1:
        // one-fingered touch: rotate
        if (scope.enableRotate === false) return;
        handleTouchStartRotate(event);
        state = STATE.TOUCH_ROTATE;
        break;

      case 2:
        // two-fingered touch: dolly-pan
        if (scope.enableZoom === false && scope.enablePan === false) return;
        handleTouchStartDollyPan(event);
        state = STATE.TOUCH_DOLLY_PAN;
        break;

      default:
        state = STATE.NONE;
    }

    if (state !== STATE.NONE) {
      scope.dispatchEvent(startEvent);
    }
  }

  function onTouchMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
    event.stopPropagation();

    switch (event.touches.length) {
      case 1:
        // one-fingered touch: rotate
        if (scope.enableRotate === false) return;
        if (state !== STATE.TOUCH_ROTATE) return; // is this needed?

        handleTouchMoveRotate(event);
        break;

      case 2:
        // two-fingered touch: dolly-pan
        if (scope.enableZoom === false && scope.enablePan === false) return;
        if (state !== STATE.TOUCH_DOLLY_PAN) return; // is this needed?

        handleTouchMoveDollyPan(event);
        break;

      default:
        state = STATE.NONE;
    }
  }

  function onTouchEnd(event) {
    if (scope.enabled === false) return;
    handleTouchEnd(event);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onContextMenu(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
  } //


  scope.domElement.addEventListener('contextmenu', onContextMenu, false);
  scope.domElement.addEventListener('mousedown', onMouseDown, false);
  scope.domElement.addEventListener('wheel', onMouseWheel, false);
  scope.domElement.addEventListener('touchstart', onTouchStart, false);
  scope.domElement.addEventListener('touchend', onTouchEnd, false);
  scope.domElement.addEventListener('touchmove', onTouchMove, false);
  window.addEventListener('keydown', onKeyDown, false); // force an update at start

  this.update();
}
; // THREE.OrbitControls = OrbitControls;

OrbitControls.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(three__WEBPACK_IMPORTED_MODULE_2__["EventDispatcher"].prototype);
OrbitControls.prototype.constructor = OrbitControls;

_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(OrbitControls.prototype, {
  center: {
    get: function get() {
      console.warn('THREE.OrbitControls: .center has been renamed to .target');
      return this.target;
    }
  },
  // backward compatibility
  noZoom: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      this.enableZoom = !value;
    }
  },
  noRotate: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      return !this.enableRotate;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      this.enableRotate = !value;
    }
  },
  noPan: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      return !this.enablePan;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      this.enablePan = !value;
    }
  },
  noKeys: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      return !this.enableKeys;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      this.enableKeys = !value;
    }
  },
  staticMoving: {
    get: function get() {
      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      return !this.enableDamping;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      this.enableDamping = !value;
    }
  },
  dynamicDampingFactor: {
    get: function get() {
      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      return this.dampingFactor;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      this.dampingFactor = value;
    }
  }
});

/***/ }),

/***/ 3:
/*!*********************************************!*\
  !*** multi ./pages/tree/red-black-tree.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kun/Documents/project/algothem-implement/pages/tree/red-black-tree.tsx */"./pages/tree/red-black-tree.tsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-object-inspector":
/*!*****************************************!*\
  !*** external "react-object-inspector" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-object-inspector");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ })

/******/ });
//# sourceMappingURL=red-black-tree.js.map