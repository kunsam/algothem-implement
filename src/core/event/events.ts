import { EventContext } from './context/event-context';
import EventEmitter from 'events';


export type AppEventListener = (context: EventContext) => void;


export class Events{

  public eventsType: string;
  public event: EventEmitter;

  constructor(eventsType: string) {
    this.eventsType = eventsType;
    this.event = new EventEmitter();
  }

  public listen(key: string, listener: AppEventListener) {
    if (!this.isEventSupported(key)) {
      throw new Error(`unsupport events: ${key}`);
    }
    if (!this.event.listeners(key).includes(listener)) {
      this.event.addListener(key, listener);
    }
    // this.event.on(key, listener);
  }

  public unlisten(eventType: string, listener: AppEventListener) {
    this.event.removeListener(eventType, listener);
  }

  public unlistenAll(eventType: string | undefined) {
    if (eventType && !this.isEventSupported(eventType as string)) {
      throw new Error(`unsupport events: ${eventType}`);
    }
    this.event.removeAllListeners(eventType);
  }

  public emit(eventType: string, context: EventContext) {
    this.event.emit(eventType, context);
  }

  public isEventSupported(eventType: string): boolean {
    return eventType !== undefined;
  }


}