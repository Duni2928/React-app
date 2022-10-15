import c from './ProfileInfo.module.css'
/* import ProfileStatus from './ProfileStatus' */
import ProfileStatusWithHook from './ProfileStatusWithHook'

const ProfileInfo = (props) => {
  return <div className='profile-info'>
    <div className={c.bg}>
      <img src={props.profile.photos.large} alt="more" />
    </div>
    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
    <div className={c.login}>
      <div className={c.ava}>
        <img src={props.profile.photos.small} alt='milan' />
      </div>
      <div className={c.description}>description</div>
    </div>
  </div>
}

export default ProfileInfo