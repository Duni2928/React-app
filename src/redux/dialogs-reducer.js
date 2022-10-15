const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'

let initialState = {
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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      let newMessage = {
        id: state.messages.length + 1,
        message: action.text
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      } 
    default: return state
  }
}

export const sendMessage = (text) => ({type: SEND_MESSAGE, text});


export default dialogsReducer
