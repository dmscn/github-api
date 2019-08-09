import * as types from './types'
import ActionType from '../../types/ActionType'

export default (state: any, action: ActionType<any[]>) => {
  switch (action.type) {
    case types.LOAD_REPOS:
      return action.payload

    default:
      return state
  }
}
