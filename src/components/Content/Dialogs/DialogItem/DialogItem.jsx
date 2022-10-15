import c from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
  return <NavLink to={'/dialogs/' + props.id} className={isActive => c.dialog + ' ' + (isActive ? c.active : '') }>{props.name}</NavLink>
}

export default DialogItem