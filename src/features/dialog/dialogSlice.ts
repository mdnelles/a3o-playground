import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { DialogState } from "./dialog";

const initialState: DialogState = {
   title: "Dialog",
   body: "NA",
   open: false,
};

export const dialogSlice = createSlice({
   name: "dialog",
   initialState,

   reducers: {
      setDialog: (state: DialogState, action: PayloadAction<any>) => {
         //console.log(action.payload);
         return action.payload;
      },
      clearDialog: (state) => initialState,
   },
});

export const { setDialog, clearDialog } = dialogSlice.actions;

export const selectDialog = (state: RootState) => state.dialog;

export default dialogSlice.reducer;
