import React, { useRef } from 'react';
import classes from './SearchBar.module.css';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchAction } from '../Store/search-slice';

const SearchBar = () => {
 const movie = useRef();
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const submitHandler = (event)=>{
    event.preventDefault();
    dispatch(searchAction.changeMovieName({movieName:movie.current.value}));
    navigate('search');
    movie.current.value ='';
 }
  return (
    <div className={classes.main}>
    <form  onSubmit={submitHandler} className={classes.search}>
      <input ref={movie}  placeholder='Search...' name='movie' type='text' />
      <button type='submit'><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
    </form>
    </div>
  )
}

export default SearchBar;