import React from 'react';
import classes from './styles/Profile.module.css';

const Profile = () => {
  return (
    <main className={classes.content}>
      <div>
        <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
             alt="error_main_content_image"/>
      </div>

      <div>
        <img src="https://q4x7t3q8.map2.ssl.hwcdn.net/assets/images/members/avamax-m1.jpg" alt="error_avatar"/>
      </div>

      <div>

        <div className={classes.posts}>
          My posts
          <div>
            new post
          </div>
        </div>

        <div>
          post 1
        </div>

        <div>
          post 2
        </div>

      </div>

    </main>
  );
}

export default Profile;
