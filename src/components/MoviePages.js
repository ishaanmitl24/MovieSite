import React, { useRef } from 'react';
import classes from './MoviePages.module.css';
const MoviePages = (props) => {
  const currPage = props.page;
  const maxPages = props.maxPages;

  const prevPageHandler = (event)=>{
    if(currPage>1){
      props.getPage(currPage-1);
    }
  }
  const nextPageHandler = (event)=>{
    if(currPage<maxPages){
      props.getPage(currPage+1);
    }
  }

  return (
    <div className={classes.pages}>
      <div className={classes.pageNo}>Page : {currPage}</div>
      <div className={classes.pagesButton}>
        <button onClick={prevPageHandler}>Prev Page</button>
        <button onClick={nextPageHandler}>Next Page</button>
      </div>
    </div>
  )
}

export default MoviePages;