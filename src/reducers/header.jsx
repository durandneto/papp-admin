import { SHOW_MOBILE_MENU, SEARCHED_USER } from '../actions'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({ showMobileMenu : false })

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case SHOW_MOBILE_MENU:   
		return state.merge({showMobileMenu : action.show})
		 // eslint-disable-next-line
		break
	default: 
		return state
	}
}

export default appReducer