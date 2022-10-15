import React from "react"
import Header from "./Header"
import {setUserData, logOut} from "./../../redux/auth-reducer"
import { connect } from "react-redux"
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state) => {
  return {
    login: state.auth.data.login,
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, {setUserData, logOut})(HeaderContainer)