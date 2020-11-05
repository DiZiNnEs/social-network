import React from 'react';
import Post from "./Post";

const Posts = (props) => {
  const post = props.PostCommentsAndLikesToProfileDates["PostComments"].map(element => {
    return (
      <Post comment={element.post_comment} likes={element.post_likes}/>
    )
  });
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
      {post}
    </div>
  )
}

export default Posts;
