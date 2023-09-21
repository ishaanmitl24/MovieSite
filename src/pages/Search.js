import React from 'react';
import Recommoned from '../components/Recommoned';
import SearchHead from '../components/SearchHead';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../Store/search-slice';

const Search = () => {
  const check = useSelector(state =>state.loading.check);
  const search = useSelector(state => state.search)
  const dispatch = useDispatch();
  const getPage = (page)=>{
    dispatch(searchAction.changePage({page:page}));
  }
  return (
    <div>
      {check && <Loading/>}
      {!check && <SearchHead  />}
      <Recommoned seeAll={search.seeAll} getPage={getPage}  page={search.page} maxPages={search.maxPages} items={search.items}/>
    </div>
  )
}

export default Search;