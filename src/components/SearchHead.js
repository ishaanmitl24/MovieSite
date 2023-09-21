import React from 'react';
import classes from './SearchHead.module.css';
import SeeAllButton from './SeeAllButton';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../Store/search-slice';

const SearchHead = () => {
  const movieName = useSelector(state => state.search.movieName);
  const items = useSelector(state => state.search.items);
  let message = ''
  let movieCheck = false;
  if(movieName.length===0){
    movieCheck = true;
    message = 'Enter movie name for search.';
  }
  else if(items.length === 0){
    movieCheck = true;
    message='😥Oops! No Results were found!';
  }
  else{
    movieCheck =false;
  }
 
  const dispatch = useDispatch();
  const showMovies =(event)=>{
    dispatch(searchAction.changeSeeAll());
  }
  return (
    <div className={classes.searchHead}>
        <div className={classes.message}>
             <h1>Search Result for:{movieName}</h1>
             {movieCheck && <p>{message}</p>}
        </div>
        <SeeAllButton see={classes.see} showMovies={showMovies} />
    </div>
  )
}

export default SearchHead