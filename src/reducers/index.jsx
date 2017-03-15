import { combineReducers } from 'redux'
import header from './header'
import ListUsers from './ListUsers'
import ListLanguages from './ListLanguages'
import ListTopics from './ListTopics'

const reducer = combineReducers({
  header
  , ListTopics
  , ListLanguages
  , ListUsers
})

export default reducer 