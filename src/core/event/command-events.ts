import { Events, AppEventListener } from './events';
import { AppEventsTypes, AppCommandEventType } from './../contants/events';
import { EventContext } from './context/event-context';


export class CommandEvents extends Events {
  constructor() {
    super(AppEventsTypes.Command);
  }

  public emitKeyEvent(eventType:string, key: string) {
    if (!key) return;
    this.emit(
      eventType,
      new EventContext(parseInt(key)),
    );
  }

  public emitEvent(eventType:string, data?: any) {
    this.emit(
      eventType,
      new EventContext(data)
    );
  }


  public emitOperationDone() {
    this.emit(
      AppCommandEventType.operationDone,
      new EventContext()
    );
  }

  public emitNodeEvent(eventType:string, args: object) {
    this.emit(eventType, new EventContext(args));
  }

  public listenOperationDone(listener: AppEventListener) {
    this.listen(AppCommandEventType.operationDone, listener);
  }
  
}