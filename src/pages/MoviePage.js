import React from 'react';
import { useSelector } from 'react-redux';
import MovieDetail from '../components/MovieDetail';
import TvDetail from '../components/TvDetail';

const MoviePage = () => {
  const detail = useSelector(state => state.detail);
  let check;
  if(detail.media === 'movie'){
    check = true;
  }
  if(detail.media === 'tv'){
    check = false;
  }
  return (
    <div>
        {check && <MovieDetail/>}
        {!check && <TvDetail/>}
    </div>
  )
}

export default MoviePage;