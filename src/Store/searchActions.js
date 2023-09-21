import { searchAction } from "./search-slice";
import { loadingActions } from "./loading-slice";

export const fetchSearchMovieData = (movieName,page)=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'Loading the searched movie data',
            check:true
        }))
        const fetchData = async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${movieName}&api_key=09c8dab256af05ec03a411d864d9abf8&page=${page}`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const searchData = await fetchData();
            const newData = searchData.results.filter((item) => item['media_type']==='movie');
            const imageFilterData = newData.filter((item)=> item['poster_path']!==null);
            dispatch(searchAction.changeMaxPages({maxPages:searchData["total_pages"]}));
            const transformedData = imageFilterData.map((newdata)=>{
                return{
                  title:newdata["title"],
                  desc:newdata["overview"],
                  bgImage:newdata["poster_path"],
                  releaseDate:newdata["release_date"],
                  rating:newdata["vote_average"],
                  id:newdata["id"],
                  media:newdata["media_type"]
                }
              });
            dispatch(searchAction.replaceItems({
                items:transformedData
            }));
            dispatch(loadingActions.changeLoadingStatus({
                status:'success',
                title:'Success...',
                message:'Sucessfully fetch the searched data',
                check:false
            }))
        }
        catch(error){
            dispatch(loadingActions.changeLoadingStatus({
                status:'failed',
                title:'Failed...',
                message:'Failed in loading the movie data',
                check:true
            }))
        }
    }
}