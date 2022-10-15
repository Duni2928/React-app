import c from './Profile.module.css'
import Preloader from "./../../common/Preloader"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return  <div className={`${c.col} ${c.profile}`}>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <MyPostsContainer />
    </div>
}
export default Profile