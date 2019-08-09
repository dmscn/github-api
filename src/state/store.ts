import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import * as reducers from './ducks'

export default function configureStore(initialState?: any): Store {
  const rootReducer = combineReducers(reducers)

  const middlewares = [thunkMiddleware]
  // if (process.env.NODE_ENV !== 'production') {
  //   middlewares.push(createLogger())
  // }

  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}
