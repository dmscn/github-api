import * as types from './types'

export const loadRepos = (repos: any[]) => ({
  type: types.LOAD_REPOS,
  payload: repos,
})
