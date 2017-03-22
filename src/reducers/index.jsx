import { combineReducers } from 'redux'
import header from './header'
import ListUsers from './ListUsers'
import ListLanguages from './ListLanguages'
import ListTopics from './ListTopics'
import ListUserGroups from './ListUserGroups'
import ListUserJoinedGroups from './ListUserJoinedGroups'
import UserAdmin from './User'

const reducer = combineReducers({
  header
  , UserAdmin
  , ListUserJoinedGroups
  , ListUserGroups
  , ListTopics
  , ListLanguages
  , ListUsers
})

export default reducer 