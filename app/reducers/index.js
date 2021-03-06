import { combineReducers } from 'redux';

import { stashes } from './stash-reducer'
import { overlays } from './overlay-reducer'
import { status } from './status-reducer'

export const rootReducer = combineReducers({
  overlays,
  stashes,
  status
})
