import React from 'react';
import classes from './styles/Dialog.module.css'
import UserDialog from "./UsersDialog";
import DialogWindow from "./DialogWIndow";


const Dialog = (props) => {

  const userDialogs = props.UserDialogsAndMessages.UserDialog.map(element => {
    return (
      <UserDialog dialogNumber={element.id} name={element.name}/>
    );
  })

  const userMessages = props.UserDialogsAndMessages.UserMessages.map(element => {
    return (
      <DialogWindow text={element.messages}/>
    )
  })

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        {userDialogs}
      </div>

      <div className={classes.messages}>
        {userMessages}
      </div>
    </div>
  );
}

export default Dialog;
