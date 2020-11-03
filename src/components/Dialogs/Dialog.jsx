import React from 'react';
import classes from './styles/Diaolog.module.css'
import UserDialog from "./UsersDialog";
import DialogWindow from "./DialogWIndow";


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
        <DialogWindow text={'hello'}/>
        <DialogWindow text={'How are you ?'}/>
        <DialogWindow text={'I am good'}/>
        <DialogWindow text={'Okay, I get it'}/>
      </div>
    </div>
  );
}

export default Dialog;
