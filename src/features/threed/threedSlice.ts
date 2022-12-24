import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { ThreedState } from "./threed";

const initialState: ThreedState = {
   xRotation: 0,
   yRotation: 0,
};

export const threedSlice = createSlice({
   name: "threed",
   initialState,

   reducers: {
      setThreed: (state: ThreedState, action: PayloadAction<any>) => {
         //console.log(action.payload);
         return action.payload;
      },
      clearThreed: (state) => initialState,
   },
});

export const { setThreed, clearThreed } = threedSlice.actions;

export const selectThreed = (state: RootState) => state.threed;

export default threedSlice.reducer;
