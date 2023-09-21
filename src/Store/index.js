import { configureStore } from "@reduxjs/toolkit";
import trendSlice from "./trend-slice";
import loadingSlice from "./loading-slice";
import searchSlice from "./search-slice";
import movieGenreSlice from "./movie-genre-slice";
import tvGenreSlice from "./tv-gener-slice";
import bollywoodSlice from "./bollywood-slice";
import movieTvDetailSlice from "./movie-tv-details";

const store = configureStore({
    reducer:{trend:trendSlice.reducer,
             loading:loadingSlice.reducer,
             search:searchSlice.reducer,
             movie:movieGenreSlice.reducer,
            tv:tvGenreSlice.reducer,
            bollywood:bollywoodSlice.reducer,
            detail:movieTvDetailSlice.reducer}
});

export default store;