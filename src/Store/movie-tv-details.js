import { createSlice } from "@reduxjs/toolkit";

const movieTvDetailSlice = createSlice({
    name:'detail',
    initialState:{
        media:null,
        id:null,
        item:[],
        genre:[],
        audio:[],
        runtime:[],
        overview:'',
        season:[],
    },
    reducers:{
        changeId(state,action){
            state.id = action.payload.id;
        },
        changeMedia(state,action){
            state.media = action.payload.media;
        },
        replaceItem(state,action){
            state.item = action.payload.item;
        },
        replaceAudio(state,action){
            state.audio = action.payload.audio;
        },
        replaceGenre(state,action){
            state.genre = action.payload.genre;
        },
        replaceRuntime(state,action){
            state.runtime = action.payload.runtime;
        },
        replaceOverview(state,action){
            state.overview = action.payload.overview;
        },
        replaceSeason(state,action){
            state.season = action.payload.season;
            state.season = state.season.slice(1,);
        }
    }
});

export const detailAction = movieTvDetailSlice.actions;
export default movieTvDetailSlice;