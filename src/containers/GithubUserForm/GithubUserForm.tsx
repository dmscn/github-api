import React, { useRef, useReducer, useContext } from 'react'
import axios from 'axios'
import { githubActions, GithubContext } from '../../ducks/github'

const BASE_URL = 'https://api.github.com'

const GithubUserForm: React.FC = () => {
  const { dispatch } = useContext(GithubContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const getUserRepos = async (event: React.MouseEvent) => {
    event.preventDefault()
    try {
      // @ts-ignore
      const username: any = inputRef.current.value
      const { data } = await axios.get(`${BASE_URL}/users/${username}/repos`)
      dispatch(githubActions.loadRepos(data))
    } catch (err) {
      console.error({ err })
    }
  }

  return (
    <>
      <label htmlFor="username">GitHub username:</label>
      <input ref={inputRef} type="text" id="username" placeholder="dmscn" />
      <button onClick={getUserRepos}>Go</button>
    </>
  )
}

export default GithubUserForm
