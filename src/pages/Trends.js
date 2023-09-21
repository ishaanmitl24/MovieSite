import React from 'react';
import BrowserHead from '../components/BrowserHead';
import Recommoned from '../components/Recommoned';
import Loading from '../components/Loading';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { trendActions } from '../Store/trend-slice';

const Trends = () => {
  const check = useSelector(state => state.loading.check);
  const trends = useSelector(state => state.trend);
  const dispatch = useDispatch();
  const getPage =(page)=>{
    dispatch(trendActions.changePage({page:page}));
  }
  return (
   <>
   {check && <Loading />}
   <BrowserHead />
   <Recommoned seeAll={trends.seeAll} getPage={getPage} page={trends.page} maxPages={trends.maxPages} items={trends.items}/>
   </>
  )
}

export default Trends;