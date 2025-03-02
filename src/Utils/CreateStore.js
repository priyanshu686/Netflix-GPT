import { configureStore } from '@reduxjs/toolkit'
// import React from 'react'
import Reducer from './UserSlice';
import MovieReducer from './MoviesSlice';
import TrailerReducer from './TrailerSlice';
import ToggleReducer from './ToggleSlice';
import languageReducer from './LanguageSlice';

const CreateStore = configureStore({
    reducer:{
        userd: Reducer,
        movie: MovieReducer,
        trailer: TrailerReducer,
        Toggle:ToggleReducer,
        language: languageReducer
    }
})

export default CreateStore
