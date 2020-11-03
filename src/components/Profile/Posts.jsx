import React from 'react';
import Post from "./Post";

const Posts = () => {
  return (
    <div>
      Posts
      <div>
        <textarea name="" id="" cols="20" rows="10"/>
        <div>
          <button>Add post</button>
        </div>
        <div>
          <button>Cancel</button>
        </div>
      </div>
      <Post comment={"What's up bro"} likes={15}/>
      <Post comment={'Coroutine is the best'} likes={10}/>
    </div>
  )
}

export default Posts;
