
import EventEmitter from 'events'


export enum AppEventType {
  sceneLoaded = 'sceneLoaded',
  renderFrame = 'renderFrame',
  operationDone = 'operationDone'
}


export class EventManager{
  public event: EventEmitter;
  constructor() {
    this.event = new EventEmitter()
  }

  public listen(key: string, listener: any) {
    if (listener === undefined) {
      listener = () => {};
    }
    this.event.on(key, listener);
  }

  public emit(key: string, props?: any) {
    this.event.emit(key, props);
  }

}