import React from 'react';
import classes from './styles/Profile.module.css'

const Post = () => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://e7.pngegg.com/pngimages/9/692/png-clipart-social-media-computer-icons-avatar-user-internet-social-media-computer-network-logo.png"
          alt=""/>
      </div>
      <div>Best post</div>
    </div>
  );
}

export default Post;
