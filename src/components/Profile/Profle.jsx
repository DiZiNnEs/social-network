import React from 'react';
import classes from './styles/Profile.module.css';
import Post from "./Post";
import Posts from "./Posts";
import Banner from "./Banner";

const Profile = () => {
  return (
    <main className='content'>
      <Banner image={'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'}/>

      <div>
        <img src="https://q4x7t3q8.map2.ssl.hwcdn.net/assets/images/members/avamax-m1.jpg" alt="error_avatar"/>
      </div>

      <div>

        <div className={classes.posts}>
          <Posts/>
        </div>


      </div>

    </main>
  );
}

export default Profile;
