export type PlayerState = 'PLAYING' | 'PAUSED'

type IAction = {
  type: PlayerState
}

type IActionTypes = {
  PLAYING: PlayerState;
  PAUSED: PlayerState;
  DEFAULT: PlayerState;
}

export const ACTION_TYPES: IActionTypes = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  DEFAULT: 'PAUSED' 
};

export const INITIAL_STATE = ACTION_TYPES.DEFAULT

export function controlReducer(state: PlayerState, action: IAction)  {
  switch(action.type) {
    case ACTION_TYPES.PLAYING: 
      return ACTION_TYPES.PLAYING
    case ACTION_TYPES.PAUSED: 
      return ACTION_TYPES.PAUSED
    default:
      return ACTION_TYPES.DEFAULT
  }

}