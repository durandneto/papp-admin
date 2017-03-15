import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'

export const CHANGE_NAME = Symbol('CHANGE_NAME')
export const RESET_CAROUSEL = Symbol('RESET_CAROUSEL')
export const CAROUSEL_PREV = Symbol('CAROUSEL_PREV')
export const CAROUSEL_NEXT = Symbol('CAROUSEL_NEXT')
export const CAROUSEL_CURRENT = Symbol('CAROUSEL_CURRENT')
export const HIDE_MESSAGE = Symbol('HIDE_MESSAGE')
export const SHOW_MOBILE_MENU = Symbol('SHOW_MOBILE_MENU')

export function go ( path , returnUrl ) {
  return (dispatch) => {
    if ( returnUrl !== undefined && returnUrl !== '')
      browserHistory.push(returnUrl)
    else
      browserHistory.push(path)
  }
}
export function show_mobile_menu(){

  return (dispatch, getState) => {
    let show = !getState().header.get('showMobileMenu')
      dispatch({
        type: SHOW_MOBILE_MENU
        , show
      })
  }

}

export function hide_message(){
  return {
    type: HIDE_MESSAGE
  }
}

export function carousel_next(){
  return (dispatch,getState) => {
  	let stateNext = getState()
  	let activeNext = stateNext.Carousel.get('active') + 1

  	if(activeNext >= stateNext.Carousel.get('img').toArray().length )
    {
      activeNext = 0
    }
    dispatch(carousel_set_current(activeNext,'next'))
  };
}
export function carousel_prev(){
   return (dispatch, getState) => {
  	let statePrev = getState()
  	let activePrev = statePrev.Carousel.get('active') - 1
    if(activePrev < 0)
    {
      activePrev = statePrev.Carousel.get('img').toArray().length - 1
    }
    dispatch(carousel_set_current(activePrev,'prev'))
  };
} 
export function carousel_set_current(current, action){
	return (dispatch, getState) => {
		let active = getState().Carousel.get('active')
		if (active !== current ) {
		  dispatch({
		    type: CAROUSEL_CURRENT
		    , current
		    , action
		  })
		}
	}
}