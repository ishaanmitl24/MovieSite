import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name:'loading',
    initialState:{
        status:'',
        title:'',
        message:'',
        check:false
    },
    reducers:{
        changeLoadingStatus(state,action){
            state.status = action.payload.status;
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.check = action.payload.check;
        }
    }
})

export const loadingActions = loadingSlice.actions;
export default loadingSlice;