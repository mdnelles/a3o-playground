import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { EditsState } from "./edits";

const initialState: EditsState = {
   css: "-",
   body: "-",
   face: "",
};

export const editsSlice = createSlice({
   name: "edits",
   initialState,

   reducers: {
      setEdits: (state: EditsState, action: PayloadAction<any>) => {
         //console.log(action.payload);
         return action.payload;
      },
      clearEdits: (state) => initialState,
   },
});

export const { setEdits, clearEdits } = editsSlice.actions;

export const selectEdits = (state: RootState) => state.edits;

export default editsSlice.reducer;
