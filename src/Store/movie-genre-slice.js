import { createSlice } from "@reduxjs/toolkit";

const movieGenreSlice=createSlice({
    name:'movie',
    initialState:{
        items:[],
        id:[],
        fetchId:[],
        page:1,
        maxPages:1,
        seeAll:false
    },
    reducers:{
        replaceItems(state,action){
            state.items = action.payload.items;
        },
        replaceFetchId(state,action){
            state.fetchId = action.payload.fetchId;
        },
        addId(state,action){
            const id = state.id.find((ele)=>ele.id===action.payload.id);
            if(id){
                state.id = state.id.filter((ele) => ele.id!==action.payload.id);
            }
            else{
                state.id.push({classid:action.payload.classid,id:action.payload.id,name:action.payload.name});
            }
        },
        changePage(state,action){
            state.page = action.payload.page;
        },
        changeMaxPages(state,action){
            state.maxPages = action.payload.maxPages;
        },
        changeSeeAll(state){
            state.seeAll = !state.seeAll;
        }
    }
});

export const movieGenreSliceAction = movieGenreSlice.actions;
export default movieGenreSlice; 