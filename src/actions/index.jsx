import { CALL_API, CHAIN_API } from './../middleware/api'

export const CHANGE_NAME = Symbol('CHANGE_NAME')
export const RESET_CAROUSEL = Symbol('RESET_CAROUSEL')
export const CAROUSEL_PREV = Symbol('CAROUSEL_PREV')
export const CAROUSEL_NEXT = Symbol('CAROUSEL_NEXT')
export const CAROUSEL_CURRENT = Symbol('CAROUSEL_CURRENT')
export const SHOW_MOBILE_MENU = Symbol('SHOW_MOBILE_MENU')
export const SEARCHED_USER = Symbol('SEARCHED_USER')
export const SEARCHED_USER_COUNT = Symbol('SEARCHED_USER_COUNT')
export const USER_SET_PAGE = Symbol('USER_SET_PAGE')


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
export function show_mobile_menu(){

  return (dispatch, getState) => {
    let show = !getState().header.get('showMobileMenu')
      dispatch({
        type: SHOW_MOBILE_MENU
        , show
      })
  }
 
}
export function change_name(name, age){
  return {
    type: CHANGE_NAME
    , name
    , age
  }
}
export function change_name2(name){
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
	    type: CHANGE_NAME
	    , name
	  })
    }, 1000);
  };
}
export function carregado(){
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
      type:RESET_CAROUSEL
    })
    }, 5000);
  };
}
export function user_set_page(page, allowNavigation){
  return (dispatch) => {
      dispatch({
      type:USER_SET_PAGE
      , page
      , allowNavigation
    })
  };
}


export function fetch_users(users, action) {

  let limit = users.get('paginator').get('limitPerPage')
  let total = users.get('paginator').get('totalPage')
  let page = users.get('paginator').get('currentPage')
  let count = users.get('paginator').get('count')
  let search = true;
  let allowNavigation = {
      next : true
      , prev : false
    }

  switch(true){
    case action === 'next':
      allowNavigation.prev = (page < total)
      page ++
      allowNavigation.next = (page < total)
      search = (page <= total)
      break
    case action === 'prev':
      page --
      allowNavigation.next = ( page <= total )
      allowNavigation.prev = ( page > 1 )
      search = (page >= 1)
      break
      search = (page !== total)
    case action === 'first':

      page = 1
      search = (page !== total)
      if ( search ) {
        allowNavigation.prev = false
        allowNavigation.next = true
      } else{
        allowNavigation.prev = false
        allowNavigation.next = false
      }

      break
    case action === 'last':
      search = (page !== total)
      if ( search ) {
        page = total
        allowNavigation.prev = true
        allowNavigation.next = false
      } else{
        allowNavigation.prev = false
        allowNavigation.next = false
      }

      break
  }

  return (dispatch) => {

    if(search){
      dispatch(
        {
          [CHAIN_API]: [
            ()=> {
              return {
                [CALL_API]: {
                  method: 'get',
                  type : 'external',
                  path: '/user/search?limit=' + limit
                  + '&page='+ page,
                  successType: SEARCHED_USER
                }
              }
            },
              (response) => {

                return {
                  [CALL_API]: {
                    method: 'get',
                    type : 'external', 
                    path: '/user/count',
                    successType: SEARCHED_USER_COUNT,
                    
                  }
                }
              }
          ]
        }
      )
       dispatch(user_set_page(page, allowNavigation))
    } else{
      dispatch(user_set_page(1, allowNavigation))
    }
  }
}
export function save_user(user) {
  return {
    [CHAIN_API]: [
      ()=> {
        return {
          [CALL_API]: {
            method: 'post',
            type : 'external',
            body: {name:user.full_name,email:user.email},
            path: '/user/save',
            successType: SEARCHED_USER
          }
        }
      }, (response) => {
        console.log(response)
      }
    ]
  }
}