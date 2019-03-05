
import EventEmitter from 'events'


export enum AppEventType {
  renderFrame = 'renderFrame'
}


export class EventManager{
  public event: EventEmitter;
  constructor() {
    this.event = new EventEmitter()
  }

  public listen(key: string, listener: any) {
    this.event.on(key, listener);
  }

  public emit(key: string, props: any) {
    this.event.emit(key, props);
  }

}