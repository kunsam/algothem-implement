import { Events, AppEventListener } from './events';
import { KeyboardEventContext } from './context/keyboard-event-context';
import { AppEventsTypes, KeyBoardEventTypes } from './../contants/events';


export type KeyboardEventListener = (e: KeyboardEventContext) => void;

export class KeyboardEvents extends Events {
  constructor() {
    super(AppEventsTypes.Keyboard);
  }

  public isEventSupported(eventType: string): boolean {
    return eventType === KeyBoardEventTypes.KeyboardKeyDown ||
      eventType === KeyBoardEventTypes.KeyboardKeyPressed ||
      eventType === KeyBoardEventTypes.KeyboardKeyUp;
  }

  public listenKeyDown(listener: KeyboardEventListener): void {
    this.listen(KeyBoardEventTypes.KeyboardKeyDown, listener as AppEventListener);
  }

  public unlistenKeyDown(listener: KeyboardEventListener): void {
    this.unlisten(KeyBoardEventTypes.KeyboardKeyDown, listener as AppEventListener);
  }

  public listenKeyPressed(listener: KeyboardEventListener): void {
      this.listen(KeyBoardEventTypes.KeyboardKeyPressed, listener as AppEventListener);
  }

  public unlistenKeyPressed(listener: KeyboardEventListener): void {
      this.unlisten(KeyBoardEventTypes.KeyboardKeyPressed, listener as AppEventListener);
  }

  public listenKeyUp(listener: KeyboardEventListener): void {
    this.listen(KeyBoardEventTypes.KeyboardKeyUp, listener as AppEventListener);
  }

  public unlistenKeyUp(listener: KeyboardEventListener): void {
    this.unlisten(KeyBoardEventTypes.KeyboardKeyUp, listener as AppEventListener);
  }

  public emitKeyUp(e: KeyboardEvent): void {
    this.emit(KeyBoardEventTypes.KeyboardKeyUp, e);
  }

  public emitKeyPressed(e: KeyboardEvent): void {
    this.emit(KeyBoardEventTypes.KeyboardKeyPressed, e);
  }

  public emitKeyDown(e: KeyboardEvent): void {
    this.emit(KeyBoardEventTypes.KeyboardKeyDown, e);
  }
}