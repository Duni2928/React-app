
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 22},
        {id: 3, message: 'What do you do?', likesCount: 32},
      ],
      newText: 'duni samuray'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Lena'},
        {id: 2, name: 'Dmitriy'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Valera'},
      ],
      messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What do you do?'},
        {id: 4, message: 'Hi,my dearAndrey'},
        {id: 5, message: 'Would you come to disco?'},
        {id: 6, message: 'My name is Valera'},
      ],
      newMessage: ''
    }
  },
  get getState() {
    return this._state
  },
  _reRender() {
    console.log("state changed")
  },
  subscribe(observer) {
    this._reRender = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._reRender(this._state)
  }
}
//window.store = store
export default store