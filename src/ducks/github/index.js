import React from 'react'
import reducer from './reducers'
import * as githubActions from './actions'

export const GithubContext = React.createContext()

export { githubActions }

export default reducer
