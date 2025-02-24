import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "userdetails",
    initialState:{user:[null]},
    reducers:{
        adduser:(state,action) => {
            state.user.push(action.payload);
        },
        removeuser:(state)=>{
            state.user.length = 0;  
        }
    }
});

export const {adduser,removeuser} = UserSlice.actions;

export default UserSlice.reducer;