import React, { useContext } from 'react'
import { GithubContext } from '../../ducks/github'

import GithubUserForm from '../../containers/GithubUserForm'
import Repos from '../../containers/Repos'
import Box from '../../components/Box'

const App: React.FC = () => {
  const { state } = useContext(GithubContext)
  const { repos } = state

  return (
    <Box width="100%" height="100vh" justify="center" align="center" column>
      <GithubUserForm />
      <Repos.List>
        {repos &&
          repos.map((repo: any) => <Repos.Item key={repo.id} repo={repo} />)}
      </Repos.List>
    </Box>
  )
}

export default App
