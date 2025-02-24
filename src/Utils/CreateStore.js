import { configureStore } from '@reduxjs/toolkit'
// import React from 'react'
import Reducer from './UserSlice';
import MovieReducer from './MoviesSlice';
import TrailerReducer from './TrailerSlice';

const CreateStore = configureStore({
    reducer:{
        userd: Reducer,
        movie: MovieReducer,
        trailer: TrailerReducer

    }
})

export default CreateStore
