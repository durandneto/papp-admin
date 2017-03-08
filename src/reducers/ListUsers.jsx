import { 
	SEARCHED_USER
	, USER_SET_PAGE
	, SEARCHED_USER_COUNT } from '../actions'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
	path: 'users'
	, data: {
		rows: []
		, columns: []
	}
	, isLoadded: false
	, paginator: {
		count: 0
		, totalPage: 0
		, currentPage: 1
		, limitPerPage: 10
		, allowNavigation: {
			next : true
			, prev : true
		}
	}
})

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case USER_SET_PAGE:
		return state.mergeDeep({
			paginator: {
					currentPage: action.page
					, allowNavigation: action.allowNavigation
				}
			})
		 // eslint-disable-next-line
		break
  	case SEARCHED_USER:
  		let columns = null
  		let rows = null
  		if ( action.response.users ){
  			columns = Object.keys(action.response.users[0])
  			rows = action.response.users
  		}
		return state.merge({
			data: {
				columns: columns
				, rows: rows 
				}
				, isLoadded : true
			})
		 // eslint-disable-next-line
		break
  	case SEARCHED_USER_COUNT:
		return state.mergeDeep({
			paginator:{
				count: action.response.count
				, totalPage: Math.ceil(action.response.count/state.get('paginator').get('limitPerPage'))
			}
		})
		 // eslint-disable-next-line
		break
	default: 
		return state
	}
}

export default appReducer