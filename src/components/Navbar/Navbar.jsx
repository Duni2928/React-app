import c from './Navbar.module.css'
import { NavLink  } from 'react-router-dom'

const Navbar = () => {
  return <aside className={c.navbar}>
    <div className={c.menu}>
      <nav>
        <ul className={c.list}>
          <li className={c.item}>
            <NavLink to='/profile' className={isActive =>c.navlink + ' ' + (isActive ? c.active : "")}>Профиль</NavLink>
          </li>
          <li className={c.item}>
            <NavLink to='/dialogs' className={isActive =>"nav-link" + (isActive ? " active" : "")}>Сообщения</NavLink>
          </li>
          <li className={c.item}>
            <NavLink to='/news' className={isActive =>"nav-link" + (isActive ? " active" : "")}>Новости</NavLink>
          </li>
          <li className={c.item}>
            <NavLink to='/music' className={isActive =>"nav-link" + (isActive ? " active" : "")}>Музыка</NavLink>
          </li>
          <li className={c.item}>
            <NavLink to='/settings' className={isActive =>"nav-link" + (isActive ? " active" : "")}>Настройки</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
}
export default Navbar