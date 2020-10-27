import React from 'react';
import 'styles/Navbar.css';

const Navbar = () => {
  return (
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

      <div>
        <p>test</p>
      </div>
    </nav>
  );
}

export default Navbar;
