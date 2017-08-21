import { combineReducers } from 'redux'
import header from './header'
import ListUsers from './ListUsers'
import ListLanguages from './ListLanguages'
import ListTopics from './ListTopics'
import ListUserGroups from './ListUserGroups'
import ListUserJoinedGroups from './ListUserJoinedGroups'
import ListPlatforms from './ListPlatforms'
import UserAdmin from './User'

const reducer = combineReducers({
  header
  , UserAdmin
  , ListPlatforms
  , ListUserGroups
  , ListUserGroups
  , ListTopics
  , ListLanguages
  , ListUsers
})

export default reducer 