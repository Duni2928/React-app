import { addPost } from '../../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newText: state.profilePage.newText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPost(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
