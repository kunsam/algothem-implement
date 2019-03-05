import { EventManager } from './../../src/core/event-manager';
import * as THREE from 'three';

export interface AppCanvas{
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  grhelper: THREE.GridHelper;
}

export interface App{
  eventManager: EventManager;
  canvas?: AppCanvas;
}
