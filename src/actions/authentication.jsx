import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'

/* User */
export const AUTHENTICATED = Symbol('AUTHENTICATED') 
export const SET_USER_ADMIN = Symbol('SET_USER_ADMIN') 
export const USER_AUTHENTICATED_ERROR = Symbol('USER_AUTHENTICATED_ERROR') 
export const LOGOUT = Symbol('LOGOUT') 

export function set_user_admin(user){
 return  {
    type: SET_USER_ADMIN
    , user
  }
}
export function logout(user){
 return  {
    type: LOGOUT
  }
}
export function authenticate(){
  return (dispatch, getState) => {
  	let user = {
  		email: getState().UserAdmin.get('email')
  		, password: getState().UserAdmin.get('password')
  	}
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type: 'external',
                body: user,
                path: '/user/authenticate',
                successType: AUTHENTICATED,
                errorType: USER_AUTHENTICATED_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}