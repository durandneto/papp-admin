import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'

export const CHANGE_NAME = Symbol('CHANGE_NAME')
export const RESET_CAROUSEL = Symbol('RESET_CAROUSEL')
export const SELECT_USER = Symbol('SELECT_USER')
export const CAROUSEL_PREV = Symbol('CAROUSEL_PREV')
export const CAROUSEL_NEXT = Symbol('CAROUSEL_NEXT')
export const CAROUSEL_CURRENT = Symbol('CAROUSEL_CURRENT')
export const SHOW_MOBILE_MENU = Symbol('SHOW_MOBILE_MENU')
export const SEARCHED_USER = Symbol('SEARCHED_USER')
export const SEARCHED_USER_COUNT = Symbol('SEARCHED_USER_COUNT')
export const USER_SET_PAGE = Symbol('USER_SET_PAGE')
export const CREATTING_NEW_USER = Symbol('CREATTING_NEW_USER')
export const HIDE_MESSAGE = Symbol('HIDE_MESSAGE')
export const NEW_USER = Symbol('NEW_USER')
export const CREATED_NEW_USER = Symbol('CREATED_NEW_USER')
export const CREATED_NEW_USER_ERROR = Symbol('CREATED_NEW_USER_ERROR')
export const UPDATED_USER_ERROR = Symbol('UPDATED_USER_ERROR')
export const SET_USER_PAGE_TYPE = Symbol('SET_USER_PAGE_TYPE')
export const UPDATED_USER = Symbol('UPDATED_USER')
export const DELETED_USER = Symbol('DELETED_USER')
export const UPDATE_SEARCH_TERM = Symbol('UPDATE_SEARCH_TERM')
export const DELETED_USER_ERROR = Symbol('DELETED_USER_ERROR')

export function go ( path , returnUrl ) {
  console.log('path',path)
  return (dispatch) => {
    if ( returnUrl !== undefined && returnUrl !== '')
      browserHistory.push(returnUrl)
    else
      browserHistory.push(path)
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
  let term = users.get('searchTerm')
  // let count = users.get('paginator').get('count')
  let search = true;
  let allowNavigation = {
      next : true
      , prev : false
    }

    console.log(term)

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
      // eslint-disable-next-line
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
    case action === 'search':
      page = 1
      break
    default:
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
                  + '&page='+ page
                  + '&name='+ term,
                  successType: SEARCHED_USER
                }
              }
            },
              (response) => {

                return {
                  [CALL_API]: {
                    method: 'get',
                    type : 'external', 
                    path: '/user/count?name='+term,
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

export function is_saving_user(isSavingUser){
   return  {
      type: CREATTING_NEW_USER
      , isSavingUser
    }
}
export function select_user(user){

  return (dispatch) =>{
    // dispatch(set_user_page_type('view'))   
    dispatch({
      type: SELECT_USER
      , user
    })   
  }
}
export function update_search_term(term){
   return  {
      type: UPDATE_SEARCH_TERM
      , term
    }
}
export function new_user(user){
   return  {
      type: NEW_USER
      , user
    }
}
export function set_user_page_type(param){
   return  {
      type: SET_USER_PAGE_TYPE
      , param
    }
}
export function create_new_user(user) {
  return (dispatch, getState) => {
    let newUser = getState().ListUsers.get('newUser')
    dispatch(is_saving_user(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type : 'external',
                body: newUser.toObject(),
                path: '/user/save',
                successType: CREATED_NEW_USER,
                errorType: CREATED_NEW_USER_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}

export function remove_user(user) {
  return (dispatch, getState) => {
    let selectedUser = getState().ListUsers.get('selectedUser')
    dispatch(is_saving_user(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'delete',
                type : 'external',
                path: '/user/remove',
                header: { 'api-key-papp': selectedUser.get('id')},
                successType: DELETED_USER,
                errorType: DELETED_USER_ERROR
              }
            }
          }, (response) => {
                  // go('/users')
                  window.location.href = '/users'
            console.log(response)
          }
        ]
    })
  }
}

export function update_user(user) {
  return (dispatch, getState) => {
    let selectedUser = getState().ListUsers.get('selectedUser')
    dispatch(is_saving_user(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'put',
                type : 'external',
                body: selectedUser.toObject(),
                path: '/user/update',
                header: { 'api-key-papp': selectedUser.get('id')},
                successType: UPDATED_USER,
                errorType: UPDATED_USER_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}

export function hide_message(){
  return {
    type: HIDE_MESSAGE
  }
}