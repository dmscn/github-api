import React, { useReducer } from 'react'
import { githubReducer } from '../../ducks'
import { GithubContext } from '../../ducks/github'

import GithubUserForm from '../GithubUserForm'
import Repos from '../Repos'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(githubReducer, [])
  const { repos } = state

  return (
    <GithubContext.Provider value={{ state, dispatch }}>
      <GithubUserForm />
      <Repos.List>
        {repos &&
          repos.map((repo: any) => <Repos.Item key={repo.id} repo={repo} />)}
      </Repos.List>
    </GithubContext.Provider>
  )
}

export default App
