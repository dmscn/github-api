import React from 'react'
import { useStore } from 'react-redux'

const App: React.FC = () => {
  const { getState } = useStore()
  const { repos } = getState().github

  return <div>{repos}</div>
}

export default App
