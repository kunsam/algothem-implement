export enum CustomEventType{
  onInsert = 'ONINSERT',
  operationDone = 'OperationDone',
}
import EventEmitter from 'events'


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

}