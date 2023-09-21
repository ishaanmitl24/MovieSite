import { bollywoodActions } from "./bollywood-slice";
import { loadingActions } from "./loading-slice";

export const fetchBollywoodData = (page)=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'Loading the bolllywood  movie data',
            check:true
        }))
        const fetchData = async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=09c8dab256af05ec03a411d864d9abf8&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi&page=${page}`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const bolllywoodData = await fetchData();
            const imageFilterData = bolllywoodData.results.filter((item)=> item['poster_path']!==null);
            dispatch(bollywoodActions.changeMaxPages({maxPages:bolllywoodData["total_pages"]}))
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
            dispatch(bollywoodActions.replaceItems({
                items:transformedData
            }));
            dispatch(loadingActions.changeLoadingStatus({
                status:'success',
                title:'Sucess...',
                message:'Sucessfully fetch the Bollywood Movie data',
                check:false
            }))
        }
        catch(error){
            dispatch(loadingActions.changeLoadingStatus({
                status:'failed',
                title:'Failed...',
                message:'Failed in loading the Bollywood Movie data',
                check:true
            }))
        }
    }
}