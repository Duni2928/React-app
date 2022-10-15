import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app-reducer';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

const store = configureStore({
  reducer: {
    app: appReducer,
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
  }
})
window.store = store
export default store