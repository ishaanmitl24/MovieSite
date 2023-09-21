import { createSlice } from "@reduxjs/toolkit";

const trendSlice = createSlice({
    name:'trend',
    initialState:{
        items:[],
        page:1,
        maxPages:1,
        seeAll:false
    },
    reducers:{
        replaceCart(state,action){
            state.items = action.payload.items;
        },
        changePage(state,action){
            state.page=action.payload.page;
        },
        changeMaxPages(state,action){
            state.maxPages = action.payload.maxPages;
        },
        changeSeeAll(state){
            state.seeAll = !state.seeAll;
        }
    }
});

export const trendActions = trendSlice.actions;
export default trendSlice;