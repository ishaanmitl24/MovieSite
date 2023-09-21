import React from 'react';
import SeeAllButton from './SeeAllButton';
import classes from './TvFilter.module.css';
import { useDispatch } from 'react-redux';
import { tvGenreSliceAction } from '../Store/tv-gener-slice';

const TvFilter = (props) => {
const dispatch = useDispatch();
 const showMovies =(event)=>{
   dispatch(tvGenreSliceAction.changeSeeAll());
  }
  return (
    <div className={classes.main}>
        <div className={classes.filterHead}>
            <div className={classes.filter}>
             <i className={`${classes.icon} fa-solid fa-tv fa-2xl`}></i>
              <h1>Tv Series</h1>
            </div>
            <hr />
        <div className={classes.series}>{props.data.map(u => u.name).join(' & ')}</div>
        </div>
        <SeeAllButton see={classes.see} showMovies={showMovies} />
    </div>
  )
}

export default TvFilter;