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

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <UserDialog dialogNumber={dialogDate[0].id} name={dialogDate[0].name}/>
        <UserDialog dialogNumber={dialogDate[1].id} name={dialogDate[1].name}/>
        <UserDialog dialogNumber={dialogDate[2].id} name={dialogDate[2].name}/>
        <UserDialog dialogNumber={dialogDate[3].id} name={dialogDate[3].name}/>
        <UserDialog dialogNumber={dialogDate[4].id} name={dialogDate[4].name}/>
        <UserDialog dialogNumber={dialogDate[5].id} name={dialogDate[5].name}/>
      </div>

      <div className={classes.messages}>
        <DialogWindow text={messagesDate[0].messages}/>
        <DialogWindow text={messagesDate[1].messages}/>
        <DialogWindow text={messagesDate[2].messages}/>
        <DialogWindow text={messagesDate[3].messages}/>
        <DialogWindow text={messagesDate[4].messages}/>
        <DialogWindow text={messagesDate[5].messages}/>
      </div>
    </div>
  );
}

export default Dialog;
