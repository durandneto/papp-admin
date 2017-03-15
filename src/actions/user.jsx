import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'

/* User */
export const SELECT_USER = Symbol('SELECT_USER')
export const SEARCHED_USER = Symbol('SEARCHED_USER')
export const SEARCHED_USER_COUNT = Symbol('SEARCHED_USER_COUNT')
export const USER_SET_PAGE = Symbol('USER_SET_PAGE')
export const CREATTING_NEW_USER = Symbol('CREATTING_NEW_USER')
export const NEW_USER = Symbol('NEW_USER')
export const CREATED_NEW_USER = Symbol('CREATED_NEW_USER')
export const CREATED_NEW_USER_ERROR = Symbol('CREATED_NEW_USER_ERROR')
export const UPDATED_USER_ERROR = Symbol('UPDATED_USER_ERROR')
export const SET_USER_PAGE_TYPE = Symbol('SET_USER_PAGE_TYPE')
export const UPDATED_USER = Symbol('UPDATED_USER')
export const DELETED_USER = Symbol('DELETED_USER')
export const UPDATE_SEARCH_TERM = Symbol('UPDATE_SEARCH_TERM')
export const DELETED_USER_ERROR = Symbol('DELETED_USER_ERROR')

/* Users */
export function user_set_page(page, allowNavigation){
  return (dispatch) => {
      dispatch({
      type:USER_SET_PAGE
      , page
      , allowNavigation
    })
  };
}

export function teste(){
  return ( dispatch ) => {
    console.log('teste user')
  }
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