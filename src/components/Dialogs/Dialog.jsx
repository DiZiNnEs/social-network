import React from 'react';
import classes from './styles/Diaolog.module.css'
import UserDialog from "./UsersDialog";
import DialogWindow from "./DialogWIndow";


const Dialog = (props) => {
  const dialogDate = [
    {id: 1, name: 'Shapagat'},
    {id: 2, name: 'Alisher'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Katya'},
    {id: 5, name: 'Dizi'},
    {id: 6, name: 'Dmitry'},
  ]

  const messagesDate = [
    {id: 1, messages: 'hello'},
    {id: 2, messages: 'How are you ?'},
    {id: 3, messages: 'I\'m good'},
    {id: 4, messages: 'Okay, I get it'},
    {id: 5, messages: 'Okay, I get it'},
    {id: 6, messages: 'Okay, I get it'},
  ]

  const userDialogs = dialogDate.map(element => {
    return (
      <UserDialog dialogNumber={element.id} name={element.name}/>
    );
  })

  const userMessages = messagesDate.map(element => {
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
