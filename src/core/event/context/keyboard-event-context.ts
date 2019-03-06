import { EventContext } from './event-context';
import { App } from './../../../../layouts/app/app-interface';



export class KeyboardEventContext extends EventContext {
  constructor(args: KeyboardEvent, app?: App) {
    super(args, app);
  }

  public keyEventArgs(): KeyboardEvent {
      return this.args as KeyboardEvent;
  }
}
