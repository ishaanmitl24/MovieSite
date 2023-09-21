import React from 'react';
import BollywoodHeader from '../components/BollywoodHeader';
import Recommoned from '../components/Recommoned';
import Loading from '../components/Loading';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { bollywoodActions } from '../Store/bollywood-slice';

const Bollywood = () => {
  const check = useSelector(state => state.loading.check);
  const bolly = useSelector(state => state.bollywood);
  const dispatch = useDispatch();
  const getPage =(page)=>{
    dispatch(bollywoodActions.changePage({page:page}));
  }
  return (
    <div>
       {check && <Loading />}
       <BollywoodHeader />
       <Recommoned seeAll={bolly.seeAll} getPage={getPage} page={bolly.page} maxPages={bolly.maxPages} items={bolly.items}/>
    </div>
  )
}

export default Bollywood;