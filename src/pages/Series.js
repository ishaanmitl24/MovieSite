import React from 'react';
import Loading from '../components/Loading';
import TvGenre from '../components/TvGenre';
import Recommoned from '../components/Recommoned';
import { useDispatch, useSelector } from 'react-redux';
import { tvGenreSliceAction } from '../Store/tv-gener-slice';
import TvFilter from '../components/TvFilter';
const Series = () => {
  const dispatch = useDispatch();
  const check = useSelector(state => state.loading.check);
  const tv = useSelector(state => state.tv);
  const getPage =(page)=>{
    dispatch(tvGenreSliceAction.changePage({page:page}));
  }
  return (
    <div>
      {check && <Loading/>}
      <TvGenre items={tv.fetchId} />
      <TvFilter data={tv.id} />
      <Recommoned seeAll={tv.seeAll} getPage={getPage} page={tv.page} maxPages={tv.maxPages} items={tv.items}/>
    </div>
  )
}

export default Series;