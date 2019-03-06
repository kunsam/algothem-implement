
import { Events } from './events';
import { AppEvents } from './app-events';
import { CommandEvents } from './command-events';
import { KeyboardEvents } from './keyboard-events';
import { AppBase } from './../../../layouts/app/app';
import { AppEventsTypes } from './../contants/events';

export class EventManager{
  private _app: AppBase;
  private _events: Map<string, Events>;

  constructor(app: AppBase) {
    this._app = app;
    this._events = new Map();
  }

  public init() {
    this.add(new KeyboardEvents());
    this.add(new CommandEvents());
    this.add(new AppEvents());
  }

  public add(events: Events) {
    this._events.set(events.eventsType, events);
  }

  public remove(events: Events) {
    this._events.delete(events.eventsType);
  }

  public appEvents(): AppEvents {
    return this._events.get(AppEventsTypes.Base) as AppEvents;
  }

  public keyboardEvents(): KeyboardEvents {
    return this._events.get(AppEventsTypes.Keyboard) as KeyboardEvents;
  }

  public commandEvents(): CommandEvents {
    return this._events.get(AppEventsTypes.Command) as CommandEvents;
  }

  public get app() {
    return this._app;
  }

}