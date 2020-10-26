import React from "react";

import './App.css';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img className='header-logo' src="https://www.logaster.com/blog/wp-content/uploads/2018/05/LogoMakr.png" alt=""/>
      </header>

      <nav className='nav'>
        <div>
          <a href="Profile">Profile</a>
        </div>

        <div>
          <a href="#Messages">Messages</a>
        </div>

        <div>
          <a href="#News">News</a>
        </div>

        <div>
          <a href="#Music">Music</a>
        </div>

        <div>
          <a href="#Settings">Settings</a>
        </div>
      </nav>

      <main className='content'>
        <div>
          <img className='content-background-image' src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt=""/>
        </div>

        <div>
          <img className='users-avatar' src="https://masna.ir/school/howto/img_avatar.png" alt=""/>
        </div>

        <div>
          My posts
          <div>
            new poss
          </div>

        </div>

        <div>
          post 1
        </div>

        <div>
          post 2
        </div>

      </main>
    </div>
  );
}

export default App;
