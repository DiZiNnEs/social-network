import React from 'react';
import Post from "./Post";

const Posts = () => {
  return (
    <div>
      Posts
      <div>
        <textarea name="" id="" cols="20" rows="10"></textarea>
        <button>Add post</button>
        <button>Cancel</button>
      </div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts;
