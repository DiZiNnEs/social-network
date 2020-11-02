import React from 'react';
import classes from './styles/Diaolog.module.css'
import { NavLink } from "react-router-dom";

const Dialog = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <div className={classes.items}>
          <NavLink to={'dialog/1'}>Shapagat</NavLink>
        </div>
        <div className={classes.items}>
          <NavLink to={'dialog/2'}>Alisher</NavLink>
        </div>
        <div className={classes.items + ' ' + classes.active}>
          <NavLink to={'dialog/3'}>Dizi</NavLink>
        </div>
        <div className={classes.items}>
          <NavLink to={'dialog/4'}>Toki</NavLink>
        </div>
        <div className={classes.items}>
          <NavLink to={'dialog/5'}>Denis</NavLink>
        </div>
        <div className={classes.items}>
          <NavLink to={'dialog/6'}>Dmitry</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.messages_items}>Hello</div>
        <div className={classes.messages_items}>Hi, how are you</div>
        <div className={classes.messages_items}>You're welcome</div>
      </div>
    </div>
  );
}

export default Dialog;
