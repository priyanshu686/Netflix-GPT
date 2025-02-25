import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name:'Movies',
    initialState:{
        movies: null,
        webseries:null,
        NowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null
    },
    reducers:{
        addMovies: (state,action) => {
            state.movies = action.payload;
        },
        addWebseries:(state,action)=>{
            state.webseries = action.payload;
        },
        addNowPlayingMovies: (state,action) => {
            state.NowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.PopularMovies = action.payload;
        },addTopRatedMovies: (state,action) => {
            state.TopRatedMovies = action.payload;
        },addUpcomingMovies: (state,action) => {
            state.UpcomingMovies = action.payload;
        },
    }
})

export default MoviesSlice.reducer;
export const {addMovies , addWebseries,addNowPlayingMovies,addTopRatedMovies,addUpcomingMovies,addPopularMovies} = MoviesSlice.actions