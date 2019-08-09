import Axios from 'axios'

export const BASE_URL = 'https://api.github.com'

const getUserRepos = (username: string) => {
  return Axios.get(`${BASE_URL}/users/${username}/repos`)
}

const getReposCommit = (username: string, repoId: number) => {
  return Axios.get(`${BASE_URL}/repos/${username}/${repoId}/commits`)
}

export default {
  getUserRepos,
  getReposCommit,
}
