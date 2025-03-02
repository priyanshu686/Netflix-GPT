import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name:"language",
    initialState:{
        lang : "en",
    },
    reducers:{
        addLang(state,action){
            state.lang = action.payload
        }
    }
})

export default LanguageSlice.reducer;
export const {addLang} = LanguageSlice.actions