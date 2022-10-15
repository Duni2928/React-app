import React from "react";
import {useParams} from "react-router-dom"; 
import { connect } from "react-redux";
import {getProfile, getStatus, updateStatus} from "./../../../redux/profile-reducer";
import Profile from "./Profile";
import WidthAuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId
    if (!userId) {
      userId = 24913
    }
    this.props.getStatus(userId) 
    this.props.getProfile(userId)
  
  }
  render() {
    return <Profile {...this.props}/> 
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  } 
}
let  withRouter = Container => (props) => {
  // Get the userId param from the URL.
   let  {userId}  = useParams(); 
  return <Container {...props} userId={userId} />
  // ...
}
export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus}),
  withRouter,
  WidthAuthRedirect 
) (ProfileContainer)
