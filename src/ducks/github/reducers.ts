import * as types from './types'
import ActionType from '../../types/ActionType'

export default (state: any, action: ActionType<any[]>) => {
  switch (action.type) {
    case types.LOAD_REPOS:
      return { ...state, repos: action.payload }

    case types.LOAD_COMMITS:
      return { ...state, commits: action.payload }

    case types.CLEAR_COMMITS:
      return { ...state, commits: [] }

    default:
      return state
  }
}
