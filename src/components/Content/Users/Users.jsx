import c from './Users.module.css'
import ava from './../../../assets/images/ava.jpg'
import { NavLink } from 'react-router-dom'
import Paginator from './Paginator'
const Users = ({currentPage, totalCount,pageSize,pageChanged, ...props}) => {
  return <div>
    <Paginator totalCount={totalCount} currentPage={currentPage} pageSize={pageSize} pageChanged={pageChanged} pageSlice={50}/>
    {props.users.map(u => {
      return <div key={u.id} className={c.item}>
        <div className={c.col}>
          <div className={c.ava}>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small != null ? u.photos.small : ava} alt='ava' />
            </NavLink>

          </div>
          {/* <button onClick={()=>{props.follow(u.id)}} className={c.btn}>{u.followed ? 'Follow': 'Unfollow'}</button> */}
          {u.followed ?
            <button className={c.btn} disabled={props.followingInProgress.includes(u.id)} onClick={() => {
              props.toggleFollowingInProgress(true,u.id)
              props.unfollowUser(u.id)
            }}>Unfollow</button>
            : <button className={c.btn} disabled={props.followingInProgress.includes(u.id)} onClick={() => {
              props.toggleFollowingInProgress(true,u.id)
              props.followUser(u.id)
            }}>Follow</button>
          }
        </div>
        <div className={c.info}>
          <div className={c.name}>{u.name}</div>
          <div className={c.location}>
            <span className={c.country}>{'u.location.country'}</span>
            <span className={c.city}>{'u.location.city'}</span>
          </div>
          <div className={c.status}>{u.status}</div>
        </div>
      </div>
    })}
  </div>
}

export default Users