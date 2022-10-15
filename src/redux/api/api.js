import * as axios from "axios";
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "5c5b6ec4-3ade-49a8-a35e-7f8c98c94840"
  } 
})
export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
  }
}
export const loginApi = {
  me() {
    return instance.get('auth/me')
  },
  logIn(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe })
  },
  logOut() {
    return instance.delete('auth/login')
  }
}
export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put('profile/status', {
      status: status
    })
  }
}


