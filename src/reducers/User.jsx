import { HIDE_MESSAGE } from '../actions'

import { 
	AUTHENTICATED
	, SET_USER_ADMIN
	, USER_AUTHENTICATED_ERROR
	, LOGOUT
 } from '../actions/authentication'

import Immutable from 'immutable'
let user = {
	name: undefined
	, email: undefined
	, id: undefined
	, authenticationToken: undefined
	, isLogged: false
	, title: {
		error: { title: 'Authentiation failed'}
		, view: { title: 'User Logged' }
		, new: { title: 'Login User' }
	}
	, visualizationType: 'new'
	, status: {
		type: undefined
		, message: undefined
	}
}

let defaultState = Immutable.fromJS(user)

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case AUTHENTICATED: 
  		return state.mergeDeep({
  			isLogged: true
  			, authenticationToken : action.response.authenticationToken
  			, email: action.response.user.email
  			, name: action.response.user.name
  			, id: action.response.user.id
  			, visualizationType: 'view'
  			, status: {
				type: null
				, message: null
			} 
  		})
  		break
  	case SET_USER_ADMIN: 
  		return state.mergeDeep({
  			email: action.user.email
  			, password: action.user.password
  		})
  		break
  	case LOGOUT: 
  		return state.merge(user)
  		break
  	case USER_AUTHENTICATED_ERROR: 
  		return state.mergeDeep({
  			visualizationType: 'error'
  			, status: {
				type: action.status
				, message: action.message
			} 
  		})
  		break
	default: 
		return state
	}
}

export default appReducer