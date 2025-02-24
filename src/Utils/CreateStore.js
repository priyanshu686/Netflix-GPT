import { configureStore } from '@reduxjs/toolkit'
// import React from 'react'
import Reducer from './UserSlice';
import MovieReducer from './MoviesSlice';

const CreateStore = configureStore({
    reducer:{
        userd: Reducer,
        movie:MovieReducer,

    }
})

export default CreateStore
