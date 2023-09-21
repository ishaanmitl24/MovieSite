import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from './pages/Root';
import Bollywood from './pages/Bollywood';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Trends from './pages/Trends';
import Search from './pages/Search';
import MoviePage from './pages/MoviePage';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTrendData } from './Store/trendAction';
import { fetchSearchMovieData } from './Store/searchActions';
import { fetchMovieGenre,fetchMovieGenreData } from './Store/movieGenreAction';
import { fetchTvGenre,fetchTvGenreData } from './Store/tvGenreAction';
import { fetchBollywoodData } from './Store/bollywoodActions';
import { fetchDetailsData } from './Store/movieTvDetailsActions';


const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Trends />,
      },
      {
        path: 'bollywood',
        element: <Bollywood />,
      },
      {
        path: 'series',
        element: <Series />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path:':id',
        element:<MoviePage />
      },
      {
        path:'bollywood/:id',
        element:<MoviePage />
      },
      {
        path:'series/:id',
        element:<MoviePage />
      },
      {
        path:'movies/:id',
        element:<MoviePage />
      },
      {
        path:'search/:id',
        element:<MoviePage />
      }
    ],
  },
]);


function App() {
  const dispatch = useDispatch();
  const trends = useSelector(state => state.trend);
  const search = useSelector(state => state.search);
  const movie= useSelector(state => state.movie);
  const tv = useSelector(state => state.tv);
  const bolly = useSelector(state => state.bollywood);
  const detail = useSelector(state => state.detail);


  useEffect(()=>{
    dispatch(fetchTrendData(trends.page));
  },[dispatch,trends.page]);


  useEffect(()=>{
    dispatch(fetchSearchMovieData(search.movieName,search.page))
  },[dispatch,search.movieName,search.page]);

  useEffect(()=>{
    dispatch(fetchMovieGenre());
  },[dispatch])

  useEffect(()=>{
    dispatch(fetchTvGenre());
  },[dispatch])

  useEffect(()=>{
    dispatch(fetchMovieGenreData( movie.id.map(u => u.id).join('|'),movie.page));
  },[dispatch,movie.id,movie.page]);

  useEffect(()=>{
    dispatch(fetchTvGenreData( tv.id.map(u => u.id).join('|'),tv.page));
  },[dispatch,tv.id,tv.page]);
 
  useEffect(()=>{
    dispatch(fetchBollywoodData(bolly.page))
  },[dispatch,bolly.page]);

  useEffect(()=>{
    dispatch(fetchDetailsData(detail.media,detail.id));
  },[dispatch,detail.media,detail.id]);

  return <RouterProvider router={router} />
}

export default App;
