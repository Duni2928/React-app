import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, toggleFollowingInProgress,getUsers, followUser, unfollowUser} from "../../../redux/users-reducer";
import Preloader from "../../common/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  pageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(currentPage, this.props.pageSize)
  }
  followUser = (userId) => {
    this.props.followUser(userId)
  }
  unfollowUser = (userId) => {
    this.props.unfollowUser(userId)
  }
  render() {
    return <>{this.props.isFetching ? <Preloader /> : <Users
      users={this.props.users}
      totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      follow={this.props.follow}
      toggleFollowingInProgress={this.props.toggleFollowingInProgress}
      followingInProgress={this.props.followingInProgress}
      pageChanged={this.pageChanged} 
      followUser = {this.followUser}
      unfollowUser = {this.unfollowUser}
      />}   
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}
/* let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    }
  }
} */
export default connect(mapStateToProps, {
  follow, setCurrentPage,toggleFollowingInProgress,getUsers,followUser,unfollowUser
})(UsersContainer)