import { HIDE_MESSAGE } from '../actions'

import { 
	SEARCHED_MEMBERS
	, SET_PAGE
	, CREATTING_NEW
	, NEW_MEMBER
	, CREATED_NEW_MEMBER
	, UPDATED
	, SELECT
	, CREATED_NEW_MEMBER_ERROR
	, SET_MEMBER_PAGE_TYPE
	, UPDATE_MEMBER_SEARCH_TERM
	, SEARCHED_MEMBERS_COUNT } from '../actions/userGroup'

import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
	data: {
		rows: []
		, columns: []
	}
	, searchTerm : ''
	, isLoadded: false
	, visualizationType: 'view'
	, isSaving: false
	, title: {
		edit: { title: 'Edit User Joined Group' }
		, remove: { title: 'Remove User Joined Group?' }
		, view: { title: 'User Joined Group Detail' }
		, new: { title: 'Join User in Group' }
	}
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
	, newRow: {
		name: null
		, user: {
			id: null
			, name: null
			, email: null
		}
		, group: {
			id: null
			, name: null
		}
	}
	, lastRow: {
		name: null
		, id: -1
		, user: {
			id: null
			, name: null
			, email: null
		}
		, group: {
			id: null
			, name: null
		} 
	}
	, selectedRow: {
		name: null
		, id: -1
		, user: {
			id: null
			, name: null
			, email: null
		}
		, group: {
			id: null
			, name: null
		} 
	}
	, status: {
		type: null
		, message: null
	}
})

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case SET_PAGE:
		return state.mergeDeep({
			paginator: {
					currentPage: action.page
					, allowNavigation: action.allowNavigation
				}
			})
		 // eslint-disable-next-line
		break
	case CREATTING_NEW:
		return state.mergeDeep({isSaving: true})
		// eslint-disable-next-line
		break
	case SET_MEMBER_PAGE_TYPE:
		return state.merge({visualizationType: action.param})
		// eslint-disable-next-line
		break
	case UPDATED:
		return state.merge({visualizationType: 'view'})
		// eslint-disable-next-line
		break
	case NEW_MEMBER:
		return state.merge({newRow: action.newRow})
		// eslint-disable-next-line
		break
	case SELECT:
		return state.merge({selectedRow: action.selectedRow})
		// eslint-disable-next-line
		break
	case UPDATE_MEMBER_SEARCH_TERM:
		return state.merge({searchTerm: action.term})
		// eslint-disable-next-line
		break
	case CREATED_NEW_MEMBER:

		let keys = Object.keys(state.get('newRow').toObject())
		let resetRow = {}

		keys.map((key)=>{
			resetRow[key] = null
		})
		resetRow.user = {id:null}
		resetRow.group = {id:null}

		return state.merge({
			isSaving: false
			, status: { type: action.status, message: null }
			, newRow: resetRow
			, lastRow: action.response.row
		})
		// eslint-disable-next-line
		break
	case CREATED_NEW_MEMBER_ERROR:
		return state.merge({
			isSaving: false,
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
				type: null
				, message: null
			} 
		})
		//eslint-disable-next-line
		break
  	case SEARCHED_MEMBERS:
  		let columns = null
  		let rows = null
  		if ( action.response.rows.length > 0 ){
  			columns = Object.keys(action.response.rows[0])
  			rows = action.response.rows
  		}
  		console.log(action.response)
		return state.merge({
			data: {
				columns: columns
				, rows: rows 
				}
				, isLoadded : true
			})
		 // eslint-disable-next-line
		break
  	case SEARCHED_MEMBERS_COUNT:
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