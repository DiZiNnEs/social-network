import React from 'react';
import classes from './styles/Profile.module.css';
import Posts from "./Posts";
import Top from "./Top";

const Profile = (props) => {
  return (
    <main className='content'>

      <div>
        <Top/>
      </div>
      <div className={classes.posts}>
        <Posts PostCommentsAndLikesToProfile={props.PostCommentsAndLikesToProfile}/>
      </div>

    </main>
  );
}

export default Profile;
