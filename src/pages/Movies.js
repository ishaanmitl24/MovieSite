import React from 'react';
import Loading from '../components/Loading';
import MovieGenre from '../components/MovieGenre';
import Recommoned from '../components/Recommoned';
import { useDispatch, useSelector } from 'react-redux';
import { movieGenreSliceAction } from '../Store/movie-genre-slice';
import MovieFilter from '../components/MovieFilter';

const Movies = () => {
  const dispatch = useDispatch();
  const check = useSelector(state => state.loading.check);
  const movie = useSelector(state => state.movie);
  const getPage =(page)=>{
    dispatch(movieGenreSliceAction.changePage({page:page}));
  }
  return (
    <div>
      {check && <Loading/>}
      <MovieGenre  items={movie.fetchId} />
      <MovieFilter data={movie.id} />
      <Recommoned seeAll={movie.seeAll} getPage={getPage} page={movie.page} maxPages={movie.maxPages} items={movie.items}/>
    </div>
  )
}

export default Movies;