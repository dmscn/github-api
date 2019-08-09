import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const reposReducer = createReducer([])({
  [types.LOAD_REPOS]: (state: any, action: { type: string; payload: any }) =>
    action.payload || state,
})

export default combineReducers({
  repos: reposReducer,
})
