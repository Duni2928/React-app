import { loginApi } from "./api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_FORM_ERROR = 'auth/SET_FORM_ERROR'

let initialState = {
  data: {
    id: null,
    login: null,
    email: null
  },
  isAuth: false,
  errors: {}
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return {...state, data: action.data, isAuth: action.isAuth} 
    case SET_FORM_ERROR: 
    let newError = {
      [action.nameForm]: action.error
    }
      return {
        ...state, 
        errors: Object.assign({...state.errors},newError)
      }
    default: return state
  }
}

export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email}, isAuth })
export const stopSubmit = (nameForm, error) => ({type: SET_FORM_ERROR, nameForm, error})
export const isMe = () => {
  return (dispatch) => {
    return loginApi.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
          dispatch(setUserData(id, login, email, true))    
        }
      }
      )
  }
}
export const logIn = (email, password, rememberMe) => {
  return (dispatch) => {
    loginApi.logIn(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(isMe())
      } 
      if (response.data.messages.length > 0) {
        dispatch(stopSubmit("loginForm",response.data.messages))
      } else {
        dispatch(stopSubmit("loginForm",null))
      }      
    })
  }
}
export const logOut = () => {
  return (dispatch) => {
    loginApi.logOut()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
    })
  }
}
export default authReducer