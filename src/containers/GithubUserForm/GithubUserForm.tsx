import React, { useRef, useContext } from 'react'
import { githubActions, GithubContext } from '../../ducks/github'
import apiService from '../../services/apiService'

import Input from '../../components/Input'

const GithubUserForm: React.FC = () => {
  const { dispatch } = useContext(GithubContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const getUserRepos = async (event: React.FormEvent | React.MouseEvent) => {
    event.preventDefault()
    try {
      // @ts-ignore
      const username: any = inputRef.current.value
      const { data } = await apiService.getUserRepos(username)
      dispatch(githubActions.loadRepos(data))
    } catch (err) {
      console.error({ err })
    }
  }

  return (
    <form onSubmit={getUserRepos}>
      <label htmlFor="username">GitHub username:</label>
      <Input ref={inputRef} type="text" id="username" placeholder="dmscn" />
      <button onClick={getUserRepos}>Go</button>
    </form>
  )
}

export default GithubUserForm
