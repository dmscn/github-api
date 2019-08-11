import React, { useContext } from 'react'
import { GithubContext } from '../../ducks/github'

import GithubUserForm from '../../containers/GithubUserForm'
import Repos from '../../containers/Repos'
import Box from '../../components/Box'
import Text from '../../components/Text'
import { navigate } from '@reach/router'

const App: React.FC = () => {
  const { state } = useContext(GithubContext)
  const { repos } = state

  const redirectToRepoPage = (repoId: string | number) => {
    navigate(`/repo/${repoId}`)
  }

  const renderList = () => (
    <>
      <Text>Choose a repo to see more about it:</Text>
      <Repos.List>
        {repos &&
          repos.map((repo: any) => (
            <Repos.Item
              key={repo.id}
              repo={repo}
              onItemClicked={() => redirectToRepoPage(repo.id)}
            />
          ))}
      </Repos.List>
    </>
  )

  return (
    <Box width="100%" height="100vh" justify="center" align="center" column>
      <GithubUserForm />
      {repos && renderList()}
    </Box>
  )
}

export default App
