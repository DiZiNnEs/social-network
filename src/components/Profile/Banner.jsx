import React from 'react';
import classes from './styles/Banner.module.css'

const Banner = (props) => {
  return (
    <div>
      <img className={classes.banner_image} src={props.image}
           alt="error_main_content_image"/>
    </div>
  );
}

export default Banner;
