import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { ThemesState } from "./themes";

const initialState: ThemesState = [
   {
      name: "Green_Solid",
      css: "border:1px solid #090; background-color:rgba(0,250,0,1); color:#111;",
   },
   {
      name: "Red_Solid",
      css: "border:1px solid #900; background-color:rgba(250,0,0,1);  color:#ebeb34;",
   },
   {
      name: "Blue_Solid",
      css: "border:1px solid #009; background-color:rgba(0,0,250,1);  color:#ebeb34;",
   },
   {
      name: "Green_Translucent",
      css: "border:1px solid #090; background-color:rgba(0,250,0,.5); color:#111;",
   },
   {
      name: "Red_Translucent",
      css: "border:1px solid #900; background-color:rgba(250,0,0,.5);  color:#ebeb34;",
   },
   {
      name: "Blue_Translucent",
      css: "border:1px solid #009; background-color:rgba(0,0,250,.5);  color:#ebeb34;",
   },
   {
      name: "Green_Gradient",
      css: "border:1px solid #090; background: rgb(13,162,0); background: linear-gradient(356deg, rgba(13,162,0,0.7) 0%, rgba(126,252,98,0.7) 100%);color:#111;",
   },
   {
      name: "Red_Gradient",
      css: "border:1px solid #900; background: rgb(162,0,0);background: linear-gradient(356deg, rgba(162,0,0,0.7) 0%, rgba(252,98,98,0.7) 100%); color:#ebeb34;",
   },
   {
      name: "Blue_Gradient",
      css: "border:1px solid #009; background: rgb(0,7,162); background: linear-gradient(356deg, rgba(0,7,162,0.7) 0%, rgba(123,137,242,0.7) 100%); color:#ebeb34;",
   },
   {
      name: "Rainbow_Gradient",
      css: "border:1px solid #009; background: rgb(131,58,180); background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); color:#ebeb34;",
   },
];

export const themesSlice = createSlice({
   name: "themes",
   initialState,

   reducers: {
      setThemes: (state: ThemesState, action: PayloadAction<any>) =>
         action.payload,
      clearThemes: (state) => initialState,
   },
});

export const { setThemes, clearThemes } = themesSlice.actions;

export const selectThemes = (state: RootState) => state.themes;

export default themesSlice.reducer;
