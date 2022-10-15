import c from './MyPosts.module.css'
import React from 'react'
import Post from './Post/Post'
import { Form, Field } from 'react-final-form'

const MyPosts = (props) => {
  let postEl = props.posts.map(item => <Post message={item.message} likesCount={item.likesCount} />)

  return <div className={c.postblock}>
    <PostForm addPost={props.addPost} />
    <div className={c.posts}>
      {postEl}
    </div>
  </div>
}

const PostForm = (props) => {
  let onSubmit = (e) => {
    props.addPost(e.post)
  }
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={c.input}>
          <Field component="textarea" name="post"></Field>
          <button type='submit'>Добавить</button>
        </form>
      )}
    />
  )
}


export default MyPosts