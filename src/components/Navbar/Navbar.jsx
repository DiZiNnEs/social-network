import React from 'react';
import classes from './styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href="/profile">Profile</a>
      </div>

      <div className={classes.item}>
        <a href="/messages">Messages</a>
      </div>

      <div className={classes.item}>
        <a href="/news">News</a>
      </div>

      <div className={classes.item}>
        <a href="/music">Music</a>
      </div>

      <div className={classes.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
