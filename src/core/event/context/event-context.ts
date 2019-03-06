import { App } from '../../../../layouts/app/app-interface';

export enum EventContextTiming {
    None,
    Before,
    After,
}

export class EventContext {
    public app?: App;
    public sender?: object;
    public args?: any; // other event arguments
    public timing: EventContextTiming = EventContextTiming.None;
    public isHandled: boolean = false; // record if this event is handled

    constructor(args?: any, app?: App, sender?: object) {
      this.app = app;
      this.args = args;
      this.sender = sender;
    }
}
