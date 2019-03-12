import { AppBase } from './../../../../layouts/app/app';

export enum EventContextTiming {
    None,
    Before,
    After,
}

export class EventContext {
    public app?: AppBase;
    public sender?: object;
    public args?: any; // other event arguments
    public timing: EventContextTiming = EventContextTiming.None;
    public isHandled: boolean = false; // record if this event is handled

    constructor(args?: any, app?: AppBase, sender?: object) {
      this.app = app;
      this.args = args;
      this.sender = sender;
    }
}
