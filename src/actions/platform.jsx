import { CALL_API, CHAIN_API } from './../middleware/api'

export const SELECT = Symbol('SELECT')
export const SEARCHED = Symbol('SEARCHED')
export const SEARCHED_COUNT = Symbol('SEARCHED_COUNT')
export const SET_PAGE = Symbol('SET_PAGE')
export const CREATTING_NEW = Symbol('CREATTING_NEW')
export const NEW = Symbol('NEW')
export const CREATED_NEW = Symbol('CREATED_NEW')
export const CREATED_NEW_ERROR = Symbol('CREATED_NEW_ERROR')
export const UPDATED_ERROR = Symbol('UPDATED_ERROR')
export const SET_PAGE_TYPE = Symbol('SET_PAGE_TYPE')
export const UPDATED = Symbol('UPDATED')
export const DELETED = Symbol('DELETED')
export const UPDATE_SEARCH_TERM = Symbol('UPDATE_SEARCH_TERM')
export const DELETED_ERROR = Symbol('DELETED_ERROR')

export function set_page(page, allowNavigation){
  return (dispatch) => {
      dispatch({
      type:SET_PAGE
      , page
      , allowNavigation
    })
  }
}
export function fetch(platforms, action) {

  let limit = platforms.get('paginator').get('limitPerPage')
  let total = platforms.get('paginator').get('totalPage')
  let page = platforms.get('paginator').get('currentPage')
  let term = platforms.get('searchTerm')
  let search = true
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
                  path: '/platform/search?limit=' + limit
                  + '&page='+ page
                  + '&name='+ term,
                  successType: SEARCHED
                }
              }
            },
              (response) => {

                return {
                  [CALL_API]: {
                    method: 'get',
                    type : 'external', 
                    path: '/platform/count?name='+term,
                    successType: SEARCHED_COUNT,
                    
                  }
                }
              }
          ]
        }
      )
      dispatch(set_page(page, allowNavigation))
    } else{
      dispatch(set_page(1, allowNavigation))
    }
  }
}
export function is_saving(isSaving){
   return  {
      type: CREATTING_NEW
      , isSaving
    }
}
export function select(selectedRow){

  return (dispatch) =>{
    dispatch({
      type: SELECT
      , selectedRow
    })   
  }
}
export function update_search_term(term){
   return  {
      type: UPDATE_SEARCH_TERM
      , term
    }
}
export function new_row(newRow){
  console.log(newRow)
   return  {
      type: NEW
      , newRow
    }
}
export function set_page_type(param){
   return  {
      type: SET_PAGE_TYPE
      , param
    }
}
export function create_new(platform) {
  return (dispatch, getState) => {
    let newRow = getState().ListPlatforms.get('newRow')
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type : 'external',
                body: newRow.toObject(),
                path: '/platform/save',
                successType: CREATED_NEW,
                errorType: CREATED_NEW_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}
export function remove(platform) {
  return (dispatch, getState) => {
    let selectedRow = getState().ListPlatforms.get('selectedRow')
    let user = getState().UserAdmin
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'delete',
                type : 'external',
                path: '/platform/remove/'+selectedRow.get('id'),
                header: { 'api-key-papp': user.get('authenticationToken')},
                successType: DELETED,
                errorType: DELETED_ERROR
              }
            }
          }, (response) => {
            window.location.href = '/platforms'
          }
        ]
    })
  }
}
export function update(platform) {
  return (dispatch, getState) => {
    let selectedRow = getState().ListPlatforms.get('selectedRow')
    let user = getState().UserAdmin
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'put',
                type : 'external',
                body: {id: selectedRow.get('id'),name: selectedRow.get('name')},
                path: '/platform/update',
                header: { 'api-key-papp': user.get('authenticationToken')},
                successType: UPDATED,
                errorType: UPDATED_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}