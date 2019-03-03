webpackHotUpdate("static/development/pages/tree/red-black-tree.js",{

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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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
      console.log(logs, this._animatorFlows, 'this._animatorFlows');
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

/***/ })

})
//# sourceMappingURL=red-black-tree.js.ac3a8e6b5b3bbf2c7e67.hot-update.js.map