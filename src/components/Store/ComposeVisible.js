import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCompose: false,showDotImage:true,selectedMail:null};

const composeSlice = createSlice({
  name: "ComposeVisible",
  initialState: initialState,
  reducers: {
    composeIsVisible(state) {
      state.showCompose = true;
    },
    NotVisible(state){
        state.showCompose=false;
    },
    
    dotimageVisible(state){
     state.showDotImage=false;
    },
    IsSelectedMail(state,action){
      state.selectedMail=action.payload;
    }
   
  },
});

export const composeActions=composeSlice.actions;
export default composeSlice.reducer;
