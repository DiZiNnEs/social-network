import React from 'react';
import classes from './styles/Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://e7.pngegg.com/pngimages/9/692/png-clipart-social-media-computer-icons-avatar-user-internet-social-media-computer-network-logo.png"
          alt=""/>
      </div>
      <div>{props.comment}</div>
      <div>Count of likes: {props.likes}</div>
      <div>Dislike</div>
    </div>
  );
}

export default Post;
