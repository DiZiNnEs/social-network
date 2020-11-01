import React from 'react';
import classes from './styles/Diaolog.module.css'

const Dialog = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <div className={classes.items}>
          Shapagat
        </div>
        <div className={classes.items}>
          Alisher
        </div>
        <div className={classes.items + ' ' + classes.active}>
          Dizi
        </div>
        <div className={classes.items}>
          Toki
        </div>
        <div className={classes.items}>
          Denis
        </div>
        <div className={classes.items}>
          Evgenij
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
