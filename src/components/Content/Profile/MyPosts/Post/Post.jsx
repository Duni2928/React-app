import ava  from './../../../../../logo-spider.png'
import c  from './Post.module.css'

const Post = (props) => {
  return <div className={c.post}>
    <div className={c.body}>
      <div className={c.ava}>
        <img src={ava} alt='ava'/>
      </div>
      <div className={c.message}>{props.message}</div>
    </div>
    <div className={c.footer}>{props.likesCount}</div>
  </div>
};

export default Post