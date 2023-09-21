import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        items:[],
        page:1,
        movieName:'',
        maxPages:1,
        seeAll:false
    },
    reducers:{
        replaceItems(state,action){
            state.items = action.payload.items;
        },
        changePage(state,action){
            state.page=action.payload.page;
        },
        changeMovieName(state,action){
            state.movieName = action.payload.movieName;
        },
        changeMaxPages(state,action){
            state.maxPages = action.payload.maxPages;
        },
        changeSeeAll(state){
            state.seeAll = !state.seeAll;
        }
    }
});

export const searchAction = searchSlice.actions;
export default searchSlice;