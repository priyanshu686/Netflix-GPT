import { createSlice } from "@reduxjs/toolkit";

const  ToggleSlice = createSlice({
    name:'Toggle',
    initialState:{
        Toggle: false,
    },
    reducers:{
        ChangeToggle:(state)=>{
            state.Toggle = !state.Toggle; 
        }
    }
})

export const {ChangeToggle} = ToggleSlice.actions

export default ToggleSlice.reducer