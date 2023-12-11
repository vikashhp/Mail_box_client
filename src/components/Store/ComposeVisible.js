import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCompose: false };

const composeSlice = createSlice({
  name: "ComposeVisible",
  initialState: initialState,
  reducers: {
    composeIsVisible(state) {
      state.showCompose = true;
    },
    NotVisible(state){
        state.showCompose=false;
    }
  },
});

export const composeActions=composeSlice.actions;
export default composeSlice.reducer;
