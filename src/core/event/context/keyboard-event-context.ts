import { AppBase } from './../../../../layouts/app/app';
import { EventContext } from './event-context';


export class KeyboardEventContext extends EventContext {
  constructor(args: KeyboardEvent, app?: AppBase) {
    super(args, app);
  }

  public keyEventArgs(): KeyboardEvent {
      return this.args as KeyboardEvent;
  }
}
