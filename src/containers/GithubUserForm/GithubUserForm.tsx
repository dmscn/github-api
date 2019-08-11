import React, { useRef, useContext } from 'react'
import { githubActions, GithubContext } from '../../ducks/github'
import apiService from '../../services/apiService'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Label from '../../components/Label'
import Box from '../../components/Box'

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
      <Box column marginVertical={10} marginHorizontal={5}>
        <Label htmlFor="username">GitHub username:</Label>
        <Box>
          <Input ref={inputRef} type="text" id="username" placeholder="dmscn" />
          <Box marginHorizontal={10}>
            <Button onClick={getUserRepos}>Go</Button>
          </Box>
        </Box>
      </Box>
    </form>
  )
}

export default GithubUserForm
