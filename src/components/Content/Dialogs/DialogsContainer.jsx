//import {connect} from 'react-redux'
import Dialogs from './Dialogs'
import { useDispatch, useSelector } from 'react-redux'
import WidthAuthRedirect from '../../hoc/AuthRedirect'
import { compose } from 'redux'

/* let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages, 
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    changeValue: (message) => {
      dispatch(updateMessageText(message))
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) */
const DialogsContainer = () => {
  let dialogs = useSelector ((state)=> state.dialogPage.dialogs)
  let messages = useSelector ((state) => state.dialogPage.messages  )
  let dispatch = useDispatch()
  return <Dialogs dialogs={dialogs} messages={messages} dispatch={dispatch}/>
}
export default compose(
  WidthAuthRedirect
)(DialogsContainer)