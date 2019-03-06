import * as THREE from 'three';
import { message } from 'antd';
import AnimatorBase from './animator-base';
import AddNodeAnimator from './add-animator';
import SwapKeyAnimator from './swapkey-animator';
import RotatedAnimator from './rotated-animator';
import FontManager from '../../font/font-manager';
import DeleteNodeAnimator from './delete-animator';
import ChangeParentAnimator from './change-parent';
import ShowTextAnimator from './show-text-animator';
import { NodeDataPair } from '../global-node-dirty-flows';
import VisitedNodeAnimator from './visited-node-animator';
import { NodeDirtyType } from './../global-node-dirty-flows';
import { EventManager } from './../../../core/event-manager';
import { BasicTreeNode } from '../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';
import { IBinaryTreeViewObjectEvent } from '../binary-tree-viewobject';



export type AnimarotGenerator = (info: NodeDataPair) => AnimatorBase[]


export default class AnimatorManager {

  private _eventManager: EventManager;
  private _nodeViewObjectMap: Map<number, BasicNodeViewobject>;
  private _animateFactory: Map<string, AnimarotGenerator>;

  constructor(map:  Map<number, BasicNodeViewobject>, eventManager: EventManager) {
    this._nodeViewObjectMap = map;
    this._animateFactory = new Map();
    this._eventManager = eventManager;
  }

  public registerAnimator(type: string, func: AnimarotGenerator) {
    this._animateFactory.set(type, func);
  }

  public onVisited(info: NodeDataPair): AnimatorBase[] {
    if (!info.node) {
      return [];
    }
    const viewObject = this._nodeViewObjectMap.get(info.node.key);
    if (viewObject) {
      return [
        new VisitedNodeAnimator(info.node, viewObject),
      ];
    }
    return [];
  }

  public onShowText(info: NodeDataPair): AnimatorBase[] {
    const animators: AnimatorBase[] = [];
    if (!info.node) {
      message.error(info.data.text, 1);
    } else {
      const viewObject = this._nodeViewObjectMap.get(info.node.key);
      if (viewObject) {
        const text = info.data && info.data.text;
        const duration = info.data && info.data.duration;
        if (text) {
          animators.push(new ShowTextAnimator({
            text: text,
            viewObject,
            node: info.node,
            duration: duration && parseInt(duration),
          }));
        }
      }
    }
    return animators;
  }

  public onChangeParent(info: NodeDataPair): AnimatorBase[] {
    const animators: AnimatorBase[] = [];
    if (info.node && info.data.newParentKey) {
      const oldParentKey = info.node && info.node.parent && info.node.parent.key;
      if (!oldParentKey) {
        return [];
      }
      const viewObject = this._nodeViewObjectMap.get(info.node.key);
      const oldParentViewObject = this._nodeViewObjectMap.get(oldParentKey);
      const newParentViewObject = this._nodeViewObjectMap.get(info.data.newParentKey);
      if (viewObject && newParentViewObject && oldParentViewObject) {
        animators.push(new ShowTextAnimator({
          viewObject,
          duration: 40,
          node: info.node,
          text: 'Change Parent',
          positionOffset: new THREE.Vector3(30, -40),
        }));
        animators.push(new ChangeParentAnimator({
          viewObject,
          duration: 40,
          node: info.node,
          newParentViewObject,
          oldParentViewObject,
        }));
      }
    }
    return animators;
  }

  public onRotate(info: NodeDataPair): AnimatorBase[] {
    const animators: AnimatorBase[] = [];
    if (!info.node) {
      return [];
    }
    const viewObject = this._nodeViewObjectMap.get(info.node.key);
    const parentKey = info.node.parent && info.node.parent.key;
    if (!parentKey) {
      return [];
    }
    if (viewObject) {
      animators.push(new RotatedAnimator(
        {
          parentKey,
          viewObject,
          node: info.node,
          dirtyType: info.data.type,
          viewObjectMap: this._nodeViewObjectMap,
        })
      );
    }
    return animators;
  }


  public onSwapKey(info: NodeDataPair): AnimatorBase[] {
    const animators: AnimatorBase[] = [];
    if (info.node && info.data && info.data.relatedNode) {
      const relatedNode = info.data && info.data.relatedNode;
      const viewobject = this._nodeViewObjectMap.get(info.node.key);
      const viewobject2 = this._nodeViewObjectMap.get(relatedNode.key);
      if (viewobject && viewobject2) {
        animators.push(new SwapKeyAnimator(
          info.node,
          relatedNode,
          viewobject,
          viewobject2,
        ));
        this._nodeViewObjectMap.set(relatedNode.key, viewobject);
        this._nodeViewObjectMap.set(info.node.key, viewobject2);
      }
    }
    return animators;
  }

  public onDeleted(info: NodeDataPair): AnimatorBase[] {
    const animators: AnimatorBase[] = [];
    if (info.data.key !== undefined) {
      const viewobject = this._nodeViewObjectMap.get(info.data.key);
      if (viewobject) {
        animators.push(new DeleteNodeAnimator(
          new BasicTreeNode(info.data.key),
          viewobject,
          () => {
            this._eventManager.emit(IBinaryTreeViewObjectEvent.deleteNode, info.data.key);
          }
        ));
      }
    }
    return animators;
  }

  public getAnimators(info: NodeDataPair): AnimatorBase[] {
    const animators: AnimatorBase[] = [];
    if (this._animateFactory.has(info.data.type)) {
      const func = this._animateFactory.get(info.data.type);
      func!(info).forEach(a => animators.push(a));
      return animators;
    }
    switch (info.data.type) {
      case NodeDirtyType.visited: {
        this.onVisited(info).forEach(a => animators.push(a));
        break;
      }
      case NodeDirtyType.showText: {
        this.onShowText(info).forEach(a => animators.push(a));
        break;
      }
      case NodeDirtyType.changeParent: {
        this.onChangeParent(info).forEach(a => animators.push(a));
        break;
      }
      case NodeDirtyType.rightRotated:
      case NodeDirtyType.leftRotated: {
        this.onRotate(info).forEach(a => animators.push(a));
        break;
      }
      case NodeDirtyType.swapKey: {
        this.onSwapKey(info).forEach(a => animators.push(a));
        break;
      }
      case NodeDirtyType.deleted: {
        this.onDeleted(info).forEach(a => animators.push(a));

        break;
      }

      case NodeDirtyType.added: {
        if (info.node) {
          animators.push(new AddNodeAnimator(
            info.node,
            new BasicNodeViewobject(info.node, FontManager.getFont('helv')),
            () => {
              this._eventManager.emit(IBinaryTreeViewObjectEvent.addNode, info.node);
            }
          ));
        }
        break;
      }
    }
    return animators;
  }

}