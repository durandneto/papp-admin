import { combineReducers } from 'redux'
import header from './header'
import ListUsers from './ListUsers'

const reducer = combineReducers({
  header
  , ListUsers
})

export default reducer 