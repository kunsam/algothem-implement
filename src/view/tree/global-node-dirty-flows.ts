import { message } from 'antd';
import { RBNodeDirtyType } from './../../tree/node/red-black-node';
import { NBasicTreeNode, BasicTreeNode } from './../../tree/node/basic-node';

export type DirtyNodeFlowsFunction = (flows: NodeDataPairFlow[]) => void;

export interface NodeDirtyDataGroup {
  data?: any;
  node: NBasicTreeNode;
  dirtyType: NodeDirtyType | RBNodeDirtyType;
}

export interface NodeDataPair {
  data?: any;
  node: NBasicTreeNode;
}

export interface NodeDataPairFlow {
  flowInfo?: any;
  flow: NodeDataPair[];
}

export enum NodeDirtyType {
  visited = 'visited',
  swapNode = 'swapNode',
  swapKey = 'swapKey',
  added = 'added',
  deleted = 'deleted',
  changeNode = 'changeNode',
  showText = 'showText',
  leftRotated = 'leftRotated',
  rightRotated = 'rightRotated',
  showMessage = 'showMessage',
}

export class GlobalNodeDirtyFlows {

  public static disabled: boolean = false;
  public static isStartSequence: boolean = false;
  public static sequenceFlow: NodeDirtyDataGroup[] = [];

  public static dirtyFlows: NodeDataPairFlow[] = [];

  public static reset() {
    GlobalNodeDirtyFlows.disabled = false;
    GlobalNodeDirtyFlows.isStartSequence = false;
    GlobalNodeDirtyFlows.sequenceFlow = [];
    GlobalNodeDirtyFlows.dirtyFlows = [];
  }

  public static startSequence() {
    GlobalNodeDirtyFlows.sequenceFlow = [];
    GlobalNodeDirtyFlows.isStartSequence = true;
  }

  public static endSequence(name?: string) {
    GlobalNodeDirtyFlows.isStartSequence = false;
    GlobalNodeDirtyFlows.addToDirtyFlows(GlobalNodeDirtyFlows.sequenceFlow, name);
    GlobalNodeDirtyFlows.sequenceFlow = [];
  }

  public static addToDirtyFlows(flow: NodeDirtyDataGroup[], name?: string) {
    if (!flow.length) return;
    if (GlobalNodeDirtyFlows.disabled) return;

    const result: NodeDataPair[] = [];
    flow.forEach(pair => {
      switch (pair.dirtyType) {
        case NodeDirtyType.deleted: {
          if (pair.node) {
            result.push({
              node: null,
              data: { key: pair.node.key, type: NodeDirtyType.deleted },
            });
          }
          break;
        }
        case NodeDirtyType.changeNode: {
          if (pair.node) {
            result.push({
              node: pair.node,
              data: { type: NodeDirtyType.changeNode },
            });
          }
          break;
        }
        case NodeDirtyType.visited: {
          if (pair.node) {
            result.push({
              node: pair.node,
              data: { type: NodeDirtyType.visited },
            }, {
              node: pair.node,
              data: { type: NodeDirtyType.showText, text: 'Visited' },
            });
          }
          break;
        }
        case NodeDirtyType.showText: {
          if (pair.node && pair.data.text) {
            result.push({
              node: pair.node,
              data: { type: NodeDirtyType.showText, text: pair.data.text },
            });
          }
          break;
        }
        case RBNodeDirtyType.recolor: {
          if (pair.node && pair.data.color !== undefined) {
            result.push(
              {
                node: pair.node,
                data: { type: NodeDirtyType.showText, text: 'ReColor'},
              }, {
                node: pair.node,
                data: { type: RBNodeDirtyType.recolor, color: pair.data.color }
              }
            );
          }
          break;
        }
        case NodeDirtyType.swapKey: {
          if (pair.node && pair.data.relatedNode instanceof BasicTreeNode) {
            result.push({
              node: pair.node,
              data: {
                type: NodeDirtyType.swapKey,
                relatedNode: pair.data.relatedNode
              },
            });
          }
          break;
        }
        case NodeDirtyType.rightRotated:
        case NodeDirtyType.leftRotated: {
          if (pair.node) {
            result.push({
                node: pair.node,
                data: { type: pair.dirtyType }
              }
            );
          }
          break;
        }
        case NodeDirtyType.showMessage: {
          const text = pair.data.text;
          const time = pair.data.time;
          const messageType = pair.data.messageType;
          if (text) {
            if (messageType === 'error') {
              message.error(text, time || 0.8);
            } else {
              message.info(text, time || 0.8);
            }
          }
          break;
        }
        default: {
          if (pair.node) {
            const data = pair.data === undefined ? {} : pair.data;
            result.push({
              node: pair.node,
              data: {
                type: pair.dirtyType,
                ...data
              },
            });
          }
          break;
        }
      }
    });
    GlobalNodeDirtyFlows.dirtyFlows.push({
      flow: result,
      flowInfo: {
        name: name || 'new-flow',
      }
    });
  }
}