import * as types from './types'

export const loadRepos = (repos: any[]) => ({
  type: types.LOAD_REPOS,
  payload: repos,
})

export const loadCommits = (commits: any[]) => ({
  type: types.LOAD_COMMITS,
  payload: commits,
})

export const clearCommits = () => ({
  type: types.CLEAR_COMMITS,
})
