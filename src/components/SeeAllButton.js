import React from 'react';
import classes from './SeeAllButton.module.css';

const SeeAllButton = (props) => {
  return (
    <div   className={`${classes.seeAll}`}>
         <button className={props.see} onClick={props.showMovies}>see all</button>
    </div>
  )
}

export default SeeAllButton