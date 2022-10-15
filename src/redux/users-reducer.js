import { usersApi } from "./api/api"

const FOLLOW_TOGGLE = 'users/FOLLOW_TOGGLE'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'users/TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'users/TOGGLE_FOLLOWING'

let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 100,
  currentPage: 1,
  isFetching: false,
  profile: null,
  followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed }
          }
          return u
        })
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_TOTAL_COUNT :
      return {...state, totalCount: action.totalCount}
    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage}
    case TOGGLE_FETCHING: 
      return {...state, isFetching: action.isFetching} 
    case TOGGLE_FOLLOWING: 
      return {
        ...state, 
        followingInProgress: action.isFollowing 
        ? [...state.followingInProgress,  action.userId ]
        : state.followingInProgress.filter(id => id !== action.userId )
      } 
    default: return state
  }

}
export const follow = (userId) => ({ type: FOLLOW_TOGGLE, userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching: isFetching })
export const toggleFollowingInProgress = (isFollowing,userId) => ({type: TOGGLE_FOLLOWING, isFollowing,userId })

export const getUsers = (currentPage, pageSize) => {
  return async(dispatch) => {
    dispatch(toggleFetching(true))
    let response = await usersApi.getUsers(currentPage, pageSize)
    dispatch(toggleFetching(false)) 
    dispatch(setUsers(response.data.items))
    dispatch(setTotalCount(response.data.totalCount))
  }
}
export const followUser = (userId) => {
  return async (dispatch) => {
    let response = await usersApi.followUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(follow(userId))
    }
    dispatch(toggleFollowingInProgress(false,userId))
  }
}
export const unfollowUser = (userId) => {
  return async (dispatch) => {
    let response = await usersApi.unfollowUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(follow(userId))
    }
    dispatch(toggleFollowingInProgress(false,userId))
  }
}
export default usersReducer