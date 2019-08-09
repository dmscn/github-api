import React, { lazy, useReducer, Suspense } from 'react'
import { githubReducer } from '../../ducks'
import { GithubContext } from '../../ducks/github'
import { Router, Redirect, RouteComponentProps } from '@reach/router'

import Loading from '../../pages/Loading'
import NotFound from '../../pages/NotFound'

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
          <NotFound path="/404" />
          <Redirect from="/" to="/404" default noThrow />
        </Router>
      </Suspense>
    </GithubContext.Provider>
  )
}

export default App
