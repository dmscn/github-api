import * as types from './types'
import axios from 'axios'
import { ThunkDispatch } from 'redux-thunk'

const BASE_URL = 'https://api.github.com/users'

export const loadRepos = (repos: []) => {
  const repositories = repos.map((repo: any) => repo.name)
  return {
    type: types.LOAD_REPOS,
    payload: repositories,
  }
}

export const fetchUserRepos = (username: string) => (
  dispatch: ThunkDispatch<any, any, any>
) => {
  return axios
    .get(`${BASE_URL}/${username}/repos`)
    .then((response: any) => dispatch(loadRepos(response)))
    .catch((error: any) => console.error(error))
}
