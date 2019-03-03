webpackHotUpdate("static/development/pages/tree/red-black-tree.js",{

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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
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



/***/ })

})
//# sourceMappingURL=red-black-tree.js.88454d5a03af57a0797c.hot-update.js.map