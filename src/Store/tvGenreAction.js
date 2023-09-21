import { tvGenreSliceAction } from "./tv-gener-slice";
import { loadingActions } from "./loading-slice";

export const fetchTvGenre = ()=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'fetching the tv genre',
            check:true
        }))
        const fetchData=async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=09c8dab256af05ec03a411d864d9abf8`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const tvGenreData = await fetchData();
            const transformedData = tvGenreData.genres.map((newdata)=>{
                return{
                  name:newdata["name"],
                  id:newdata["id"]
                }
              });
            dispatch(tvGenreSliceAction.replaceFetchId({
                fetchId:transformedData
            }));
            dispatch(loadingActions.changeLoadingStatus({
                status:'success',
                title:'Sucess...',
                message:'Sucessfully fetch the tv genre data',
                check:false
            }))
        }
        catch(error){
            dispatch(loadingActions.changeLoadingStatus({
                status:'failed',
                title:'Failed...',
                message:'Failed in loading the tv genre data',
                check:true
            }))
        }
    }
}

export const fetchTvGenreData = (genre,page)=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'fetching the TV genre Data',
            check:true
        }))
        const fetchData=async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=09c8dab256af05ec03a411d864d9abf8&with_genres=${genre}&page=${page}&sort_by=popularity.desc`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const tvGenreDataNew = await fetchData();
            const imageFilterData = tvGenreDataNew.results.filter((item)=> item['poster_path']!==null);
            dispatch(tvGenreSliceAction.changeMaxPages({maxPages:tvGenreDataNew["total_pages"]}))
            const transformedData = imageFilterData.map((newdata)=>{
                return{
                    title:newdata["name"],
                    desc:newdata["overview"],
                    bgImage:newdata["poster_path"],
                    releaseDate:newdata["first_air_date"],
                    rating:newdata["vote_average"],
                    id:newdata["id"],
                    media:'tv'
                  }
              });
            dispatch(tvGenreSliceAction.replaceItems({
                items:transformedData
            }));
            dispatch(loadingActions.changeLoadingStatus({
                status:'success',
                title:'Sucess...',
                message:'Sucessfully fetch the TV genre data',
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

