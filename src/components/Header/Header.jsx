import c from './Header.module.css'
import logo from './../../logo.svg'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return <header className={c.header}>
    <div className={c.image}>
      <img src={logo} alt='logo'/>
    </div>
    <div className={c.login}>
      {props.isAuth ? props.login : <NavLink to="/login/">Login</NavLink>} 
    </div>
    {props.isAuth ? <div className={c.login} onClick={props.logOut}><NavLink to="/login/">logout</NavLink></div> : "" }
    
  </header>
}
export default Header