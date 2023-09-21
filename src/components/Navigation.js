import React, { useRef, useState } from 'react';
import classes from './Navigation.module.css'
import BackgroundDesign from './BackgroundDesign';
import {NavLink}  from 'react-router-dom';
import SearchBar from './SearchBar';

const Navigation = (props) => {
  return (
  <div>
    <div className={classes.main}>
      <BackgroundDesign />
        <nav className={classes.nav}>
          <div className={classes.movies}>
             <i className="Play fa-solid fa-play fa-2xl"></i>
             <div className={classes.heading}>
             <h1>Hell</h1>
             <h3>fire</h3>
             </div>
          </div>
          <nav className={classes.pages}>
            <NavLink className={({isActive})=> (isActive?classes.active:undefined) }  to='' end><div className={classes.pageContent}><i className="page fa-solid fa-arrow-trend-up fa-lg"></i> <h2>Trends</h2></div></NavLink>
            <NavLink className={({isActive})=> (isActive?classes.active:undefined) }  to='bollywood' end><div className={classes.pageContent}><i className="page fa-solid fa-globe fa-lg"></i> <h2>Bollywood</h2></div></NavLink>
            <NavLink className={({isActive})=> (isActive?classes.active:undefined) }  to='series' end><div className={classes.pageContent}><i className="page fa-solid fa-tv fa-lg"></i><h2>Series</h2></div></NavLink>
            <NavLink className={({isActive})=> (isActive?classes.active:undefined) }  to='movies' ><div className={classes.pageContent}><i className="page fa-solid fa-film fa-lg"></i><h2>Movies</h2></div></NavLink>
          </nav>
          <hr></hr>
        </nav>
    </div>
    <SearchBar />
  </div>
  )
}

export default Navigation