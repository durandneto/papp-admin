import { combineReducers } from 'redux'
import header from './header'
import ListUsers from './ListUsers'
import ListLanguages from './ListLanguages'
import ListTopics from './ListTopics'
import ListUserGroups from './ListUserGroups'

const reducer = combineReducers({
  header
  , ListUserGroups
  , ListTopics
  , ListLanguages
  , ListUsers
})

export default reducer 