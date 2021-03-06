import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./styles/UserDialog.module.css";


const UserDialog = (props) => {
  return (
    <div className={classes.items}>
      <NavLink to={`dialog/${props.dialogNumber}`}>{props.name}</NavLink>
    </div>
  );
}

export default UserDialog;
