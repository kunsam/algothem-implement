import { Events } from './events';
import { AppEventsTypes } from './../contants/events';


export class AppEvents extends Events {
  constructor() {
    super(AppEventsTypes.Base);
  }

  
}