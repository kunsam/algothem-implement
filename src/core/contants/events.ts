

export enum AppEventsTypes {
  Base = 'events.base',
  Mouse = 'events.mouse',
  Command = 'events.command',
  Keyboard = 'events.keyboard',
  Transaction = 'events.transaction',
  Environment = 'events.environment',
}


export enum AppBaseEventType {
  renderFrame = 'renderFrame',
}

export enum AppCommandEventType {
  rePlay = 'rePlay',
  sceneLoaded = 'sceneLoaded',
  operationDone = 'operationDone',
  onSelectTree = 'onSelectTree',
}

export enum KeyBoardEventTypes {

  KeyboardKeyUp = 'event.keyboard.keyup',
  KeyboardKeyDown = 'event.keyboard.keydown',
  KeyboardKeyPressed = 'event.keyboard.keypressed',

}

