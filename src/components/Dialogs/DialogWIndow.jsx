import React from 'react';
import classes from './styles/DialogWIndows.module.css';


const DialogWindow = (props) => {
  return (
    <div className={classes.messages_items}>
      {props.text}
    </div>
  );
}

export default DialogWindow;
