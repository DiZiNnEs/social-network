import React from 'react';
import classes from './styles/Diaolog.module.css'
import UserDialog from "./UsersDialog";


const Dialog = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <UserDialog dialogNumber={1} name={'Shapagat'}/>
        <UserDialog dialogNumber={2} name={'Alisher'}/>
        <UserDialog dialogNumber={3} name={'Dizi'}/>
        <UserDialog dialogNumber={4} name={'Sveta'}/>
        <UserDialog dialogNumber={5} name={'Katya'}/>
        <UserDialog dialogNumber={6} name={'Toki'}/>
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
