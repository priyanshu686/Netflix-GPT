import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "userdetails",
    initialState:null,
    reducers:{
        adduser:(state,action) => {
            return (action.payload);
        },
        removeuser:(state)=>{
            return (null);  
        }
    }
});

export const {adduser,removeuser} = UserSlice.actions;

export default UserSlice.reducer;