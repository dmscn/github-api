import Axios from 'axios'

export const BASE_URL = 'https://api.github.com'

const getUserRepos = (username: string) => {
  return Axios.get(`${BASE_URL}/users/${username}/repos`)
}

const getReposCommit = (username: string, repoName: string) => {
  return Axios.get(`${BASE_URL}/repos/${username}/${repoName}/commits`)
}

export default {
  getUserRepos,
  getReposCommit,
}
