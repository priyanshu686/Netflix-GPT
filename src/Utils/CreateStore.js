import { configureStore } from '@reduxjs/toolkit'
// import React from 'react'
import Reducer from './UserSlice';

const CreateStore = configureStore({
    reducer:{
        userd: Reducer,
    }
})

export default CreateStore
