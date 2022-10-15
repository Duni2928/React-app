import { profileApi } from "./api/api"
const ADD_POST = 'profile/ADD_POST'
const GET_USER_PROFILE = 'profile/GET_USER_PROFILE'
const GET_STATUS = 'profile/GET_STATUS'

let initialState = {
  posts: [
    {id: 1, message: 'Hello', likesCount: 12},
    {id: 2, message: 'How are you?', likesCount: 22},
    {id: 3, message: 'What do you do?', likesCount: 32},
  ],
  profile: null,
  status: ""
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: state.posts.length + 1,
        message: action.text,
        likesCount: 0 
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
      }
    case GET_USER_PROFILE: 
      return {...state, profile: action.profile} 
    case GET_STATUS: 
      return {...state, status: action.status}
    default: return state  
  }
}
export const addPost = (text) => ({type: ADD_POST, text});

export const setStatus = (status) => ({type: GET_STATUS, status})
export const getUserProfile = (profile) => ({type: GET_USER_PROFILE, profile })

export const getProfile = (userId) => {
  return async (dispatch) => {
    let response = await profileApi.getProfile(userId)
    dispatch(getUserProfile(response.data))
  }
}
export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
  }
}
export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }  
  }
}

export default profileReducer