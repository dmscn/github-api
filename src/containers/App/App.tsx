import React, { lazy, useReducer, Suspense } from 'react'
import { githubReducer } from '../../ducks'
import { GithubContext } from '../../ducks/github'
import { Router, RouteComponentProps } from '@reach/router'

import Loading from '../../pages/Loading'

const AsyncHomePage: React.FC<RouteComponentProps> = lazy(() =>
  import('../../pages/HomePage')
)

const AsyncRepoPage: React.FC<RouteComponentProps> = lazy(() =>
  import('../../pages/RepoPage')
)

const App: React.FC = () => {
  const [state, dispatch] = useReducer(githubReducer, [])

  return (
    <GithubContext.Provider value={{ state, dispatch }}>
      <Suspense fallback={<Loading />}>
        <Router>
          <AsyncHomePage path="/" />
          <AsyncRepoPage path="/repo/:repoId" />
        </Router>
      </Suspense>
    </GithubContext.Provider>
  )
}

export default App
