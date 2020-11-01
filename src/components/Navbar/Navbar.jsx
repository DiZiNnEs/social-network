import React from 'react';
import classes from './styles/Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active__link}>Profile</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to='/messages' activeClassName={classes.active__link}>Messages</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active__link}>News</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active__link}>Music</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active__link}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
