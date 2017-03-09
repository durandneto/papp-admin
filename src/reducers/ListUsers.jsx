import { 
	SEARCHED_USER
	, USER_SET_PAGE
	, CREATTING_NEW_USER
	, NEW_USER
	, CREATED_NEW_USER
	, CREATED_NEW_USER_ERROR
	, HIDE_MESSAGE
	, SEARCHED_USER_COUNT } from '../actions'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
	path: 'users'
	, data: {
		rows: []
		, columns: []
	}
	, isLoadded: false
	, isSavingUser: false
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
	, newUser: {
		name: ''
		, email: ''
	}
	, lastUser: {
		name: ''
		, email: ''
		, id: 0
	}
	, status: {
		type: ''
		, message: ''
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
	case CREATTING_NEW_USER:
		return state.mergeDeep({isSavingUser: true})
		// eslint-disable-next-line
		break
	case NEW_USER:
		return state.merge({newUser: action.user})
		// eslint-disable-next-line
		break
	case CREATED_NEW_USER:

		let keys = Object.keys(state.get('newUser').toObject())
		let resetUser = {}

		keys.map((key)=>{
			resetUser[key] = ''
		})

		return state.merge({
			isSavingUser: false
			, status: { type: action.status, message: '' }
			, newUser: resetUser
			, lastUser: action.response.user
		} 
		)
		// eslint-disable-next-line
		break
	case CREATED_NEW_USER_ERROR:
		return state.merge({
			isSavingUser: false,
			status: {
				type: action.status
				, message: action.message
			} 
		})
		//eslint-disable-next-line
		break
	case HIDE_MESSAGE:
		return state.merge({
			status: {
				type: ''
				, message: ''
			} 
		})
		//eslint-disable-next-line
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