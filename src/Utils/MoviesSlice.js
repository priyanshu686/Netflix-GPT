import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name:'Movies',
    initialState:{
        movies: null,
    },
    reducers:{
        addMovies: (state,action) => {
            state.movies = action.payload;
        }
    }
})

export default MoviesSlice.reducer;
export const {addMovies} = MoviesSlice.actions