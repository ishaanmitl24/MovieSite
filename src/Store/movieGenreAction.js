import { movieGenreSliceAction } from "./movie-genre-slice";
import { loadingActions } from "./loading-slice";

export const fetchMovieGenre = ()=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'fetching the movie genre',
            check:true
        }))
        const fetchData=async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=09c8dab256af05ec03a411d864d9abf8`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const movieGenreData = await fetchData();
            const transformedData = movieGenreData.genres.map((newdata)=>{
                return{
                  name:newdata["name"],
                  id:newdata["id"]
                }
              });
            dispatch(movieGenreSliceAction.replaceFetchId({
                fetchId:transformedData
            }));
            dispatch(loadingActions.changeLoadingStatus({
                status:'success',
                title:'Sucess...',
                message:'Sucessfully fetch the genre data',
                check:false
            }))
        }
        catch(error){
            dispatch(loadingActions.changeLoadingStatus({
                status:'failed',
                title:'Failed...',
                message:'Failed in loading the movie genre data',
                check:true
            }))
        }
    }
}

export const fetchMovieGenreData = (genre,page)=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'fetching the movie genre Data',
            check:true
        }))
        const fetchData=async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=09c8dab256af05ec03a411d864d9abf8&with_genres=${genre}&page=${page}`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const movieGenreDataNew = await fetchData();
            const imageFilterData = movieGenreDataNew.results.filter((item)=> item['poster_path']!==null);
            dispatch(movieGenreSliceAction.changeMaxPages({maxPages:movieGenreDataNew["total_pages"]}))
            const transformedData = imageFilterData.map((newdata)=>{
                return{
                    title:newdata["title"],
                    desc:newdata["overview"],
                    bgImage:newdata["poster_path"],
                    releaseDate:newdata["release_date"],
                    rating:newdata["vote_average"],
                    id:newdata["id"],
                    media:'movie'
                  }
              });
            dispatch(movieGenreSliceAction.replaceItems({
                items:transformedData
            }));
            dispatch(loadingActions.changeLoadingStatus({
                status:'success',
                title:'Sucess...',
                message:'Sucessfully fetch the Movie genre data',
                check:false
            }))
        }
        catch(error){
            dispatch(loadingActions.changeLoadingStatus({
                status:'failed',
                title:'Failed...',
                message:'Failed in loading the Movie genre data',
                check:true
            }))
        }
    }
}

