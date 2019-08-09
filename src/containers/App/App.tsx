import React, { useReducer } from 'react'
import { githubReducer } from '../../ducks'
import { githubActions } from '../../ducks/github'

const App: React.FC = () => {
  const [repos, dispatch] = useReducer(githubReducer, [])

  return <div>{repos}</div>
}

export default App
