import { trendActions } from "./trend-slice";
import { loadingActions } from "./loading-slice";


export const fetchTrendData = (page)=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'Loading the movie data',
            check:true
        }))
        const fetchData = async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=09c8dab256af05ec03a411d864d9abf8&page=${page}`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const trendData = await fetchData();
            const trendDataNew = trendData.results.filter((item)=>item['media_type']!=='person');
            const imageFilterData = trendDataNew.filter((item)=> item['poster_path']!==null);
            dispatch(trendActions.changeMaxPages({maxPages:trendData["total_pages"]}))
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
            dispatch(trendActions.replaceCart({
                items:transformedData
            }));
            dispatch(loadingActions.changeLoadingStatus({
                status:'success',
                title:'Sucess...',
                message:'Sucessfully fetch the data',
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