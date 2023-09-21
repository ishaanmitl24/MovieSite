import React, { useEffect } from 'react';
import GenreItems from './GenreItems';
import classes from './TvGenre.module.css';
import { useDispatch } from 'react-redux';
import { tvGenreSliceAction } from '../Store/tv-gener-slice';

const TvGenre = (props) => {
  const dispatch = useDispatch();
  const itemHandler = (data)=>{
      dispatch(tvGenreSliceAction.addId({classid:data.id,id:data.id.toString(),name:data.name}));
  }
  return (
    <div className={classes.genre}>
        {props.items.map((item)=>(
            <GenreItems styling={classes.item} itemHandler={itemHandler}  id={item.id} key={item.id} name={item.name} />
        ))}
    </div>
  )
}

export default TvGenre;