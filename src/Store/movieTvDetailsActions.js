import { loadingActions } from "./loading-slice";
import { detailAction } from "./movie-tv-details";

export const fetchDetailsData = (media,id)=>{
    return async(dispatch)=>{
        dispatch(loadingActions.changeLoadingStatus({
            status:'loading',
            title:'Loading...',
            message:'Loading the movie page',
            check:true
        }))
        const fetchData = async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/${media}/${id}?api_key=09c8dab256af05ec03a411d864d9abf8`);
            if(!response.ok){
                throw new Error('Fetching failed.')
            }
            const data = await response.json();
            return data;
        }
        try{
            const searchData = await fetchData();
            dispatch(detailAction.replaceAudio({audio:searchData["spoken_languages"]}));
            dispatch(detailAction.replaceGenre({genre:searchData["genres"]}));
            dispatch(detailAction.replaceOverview({overview:searchData['overview']}));
            if(media==='tv'){
                dispatch(detailAction.replaceRuntime({runtime:searchData['episode_run_time']}));
                dispatch(detailAction.replaceSeason({season:searchData.seasons}));
            }
            dispatch(detailAction.replaceItem({
                item:searchData
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
                message:'Failed in loading the movie page data',
                check:true
            }))
        }
    }
}