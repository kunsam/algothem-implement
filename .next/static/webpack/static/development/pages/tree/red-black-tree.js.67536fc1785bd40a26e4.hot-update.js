webpackHotUpdate("static/development/pages/tree/red-black-tree.js",{

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/modal/style/index.css */ "./node_modules/antd/lib/modal/style/index.css");
/* harmony import */ var antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layouts_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts/app */ "./layouts/app.tsx");
/* harmony import */ var react_object_inspector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-object-inspector */ "./node_modules/react-object-inspector/lib/ObjectInspector.js");
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
      var redBlackTreeViewObject;
      _src_view_font_font_manager__WEBPACK_IMPORTED_MODULE_18__["default"].getFontAsync('helv').then(function () {
        redBlackTreeViewObject = new _src_view_tree_red_black_tree_viewobject__WEBPACK_IMPORTED_MODULE_17__["RedBlackTreeViewObject"](_this.props.app, redblacktree);
        treeContainer.add(redBlackTreeViewObject);

        _this.props.app.eventManager.listenInsertKey(function (key) {
          redBlackTreeViewObject.insert(key);
        });
      });
      return {
        treeContainer: treeContainer,
        redBlackTreeViewObject: redBlackTreeViewObject
      };
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
      scene.add(tree.treeContainer);
      var raycaster = new three__WEBPACK_IMPORTED_MODULE_9__["Raycaster"]();
      renderer.domElement.addEventListener('click', raycast, false);

      function raycast(e) {
        raycaster.setFromCamera({
          x: e.clientX / window.innerWidth * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1
        }, camera);

        if (tree.treeContainer.children[0] && tree.treeContainer.children[0].children) {
          var intersects = raycaster.intersectObjects(tree.treeContainer.children[0].children, true);
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
                  lineNumber: 126
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"](react_object_inspector__WEBPACK_IMPORTED_MODULE_12___default.a, {
                data: node,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 126
                },
                __self: this
              }))
            });
          }
        }
      }

      animate();
      document.addEventListener('keydown', this.onKeyDown.bind(this));

      function animate() {
        // 相机情况根据节点数量进行调整
        // 网格helper更新为叶节点下面的位置
        requestAnimationFrame(animate);
        console.log(tree.redBlackTreeViewObject, 'tree.redBlackTreeViewObject');

        if (tree.redBlackTreeViewObject) {
          tree.redBlackTreeViewObject.update();
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
          lineNumber: 185
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
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        id: "control-header",
        style: {
          position: 'fixed'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_components_control_panel__WEBPACK_IMPORTED_MODULE_14__["ControlPanel"], {
        app: app,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10__["createElement"](RedBlackTreePage, {
        app: app,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }));
    }
  }]);

  return redBlackTree;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=red-black-tree.js.67536fc1785bd40a26e4.hot-update.js.map