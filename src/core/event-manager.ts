
import EventEmitter from 'events'


export enum CustomEventType{
  onFind = 'onFind',
  onInsert = 'ONINSERT',
  onDelete = 'onDelete',
  onLeftRotate = 'onLeftRotate',
  operationDone = 'OperationDone',
  onRightRotate = 'onRightRotate',
}

export default class EventManager{
  public event: EventEmitter;
  constructor() {
    this.event = new EventEmitter()
  }

  public listenInsertKey(listener: (key: number) => void) {
    this.event.on(CustomEventType.onInsert, listener)
  }

  public emitInsertKey(key: number) {
    this.event.emit(CustomEventType.onInsert, key);
  }

  public listenOperationDone(listener: () => void) {
    this.event.on(CustomEventType.operationDone, listener)
  }

  public emitOperationDone() {
    this.event.emit(CustomEventType.operationDone);
  }

  public listenDeleteKey(listener: (key: number) => void) {
    this.event.on(CustomEventType.onDelete, listener)
  }

  public emitDeleteKey(key: number) {
    this.event.emit(CustomEventType.onDelete, key);
  }

  public listenFindKey(listener: (key: number) => void) {
    this.event.on(CustomEventType.onFind, listener)
  }

  public emitFindKey(key: number) {
    this.event.emit(CustomEventType.onFind, key);
  }

  public listenLeftRotate(listener: (key: number) => void) {
    this.event.on(CustomEventType.onLeftRotate, listener)
  }

  public emitLeftRotate(key: number) {
    this.event.emit(CustomEventType.onLeftRotate, key);
  }

  public listenRightRotate(listener: (key: number) => void) {
    this.event.on(CustomEventType.onRightRotate, listener)
  }

  public emitRightRotate(key: number) {
    this.event.emit(CustomEventType.onRightRotate, key);
  }

}