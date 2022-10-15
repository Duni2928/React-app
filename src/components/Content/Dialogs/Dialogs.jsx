import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { Form, Field } from 'react-final-form'

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map(item => <DialogItem name={item.name} id={item.id} />)
  let messagesElement = props.messages.map(item => <Message message={item.message} />)
  return (
    <div className={c.dialogs}>
      <div className={c.dialogItems}>
        {dialogsElement}
      </div>
      <div className={c.messages}>
        <div>{messagesElement}</div>
        <DialogForm dispatch={props.dispatch}/>
      </div>
    </div>
  )
}
const DialogForm = (props) => {
  let onSubmit = (e) => {
    props.dispatch({type: 'dialogs/SEND_MESSAGE', text: e.dialogText})
  }
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={c.input}>
          <Field type="text" component="textarea" name="dialogText" />
          <button type='submit'>Отправить</button>
        </form>
      )}
    />
  )
}
export default Dialogs