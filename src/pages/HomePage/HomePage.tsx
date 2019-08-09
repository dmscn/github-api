import React, { useContext } from 'react'
import { GithubContext } from '../../ducks/github'

import GithubUserForm from '../../containers/GithubUserForm'
import Repos from '../../containers/Repos'

const App: React.FC = () => {
  const { state } = useContext(GithubContext)
  const { repos } = state

  return (
    <>
      <GithubUserForm />
      <Repos.List>
        {repos &&
          repos.map((repo: any) => <Repos.Item key={repo.id} repo={repo} />)}
      </Repos.List>
    </>
  )
}

export default App
