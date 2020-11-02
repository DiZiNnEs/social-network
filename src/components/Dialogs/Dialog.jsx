import React from 'react';
import classes from './styles/Diaolog.module.css'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItems";


const Dialog = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <DialogItem dialogNumber={1} name={'Shapagat'}/>
        <DialogItem dialogNumber={2} name={'Alisher'}/>
        <DialogItem dialogNumber={3} name={'Dizi'}/>
        <DialogItem dialogNumber={4} name={'Sveta'}/>
        <DialogItem dialogNumber={5} name={'Katya'}/>
        <DialogItem dialogNumber={6} name={'Toki'}/>
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
