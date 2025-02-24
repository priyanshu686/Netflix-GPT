import { createSlice } from "@reduxjs/toolkit";

const TrailerSlice = createSlice({
    name:"Trailer",
    initialState:{
        trailer: null,
    },
    reducers:{
        addKey: (state,action)=> {
            state.trailer = action.payload;
        }
    }
})

export const {addKey} = TrailerSlice.actions;

export default TrailerSlice.reducer;