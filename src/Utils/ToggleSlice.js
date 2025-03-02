import { createSlice } from "@reduxjs/toolkit";

const  ToggleSlice = createSlice({
    name:'Toggle',
    initialState:{
        Toggle: false,
        GPTSearch: null
    },
    reducers:{
        ChangeToggle:(state)=>{
            state.Toggle = !state.Toggle; 
        },
        ChangeInput:(state,action)=>{
            state.GPTSearch = action.payload
        }
    }
})

export const {ChangeToggle , ChangeInput} = ToggleSlice.actions

export default ToggleSlice.reducer