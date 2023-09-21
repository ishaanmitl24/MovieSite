import { createSlice } from "@reduxjs/toolkit";

const bollywoodSlice = createSlice({
    name:'bollywood',
    initialState:{
        items:[],
        page:1,
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
        changeMaxPages(state,action){
            state.maxPages = action.payload.maxPages;
        },
        changeSeeAll(state){
            state.seeAll = !state.seeAll;
        }
    }
});

export const bollywoodActions = bollywoodSlice.actions;
export default bollywoodSlice;