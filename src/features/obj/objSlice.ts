import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { ObjState } from "./obj";

const configCss = (color: string) => {
   return `border: 1px solid ${color}; color:${color}; backface-visibility: visible; text-align:center; line-height:10; font-family: Arial, Helvetica, sans-serif;`;
};

const initialState: ObjState = {
   name: "Skeleton",
   theme: "Blue_Translucent",
   anim1: {
      border: "",
      degreesHi: -15,
      degreesLow: 15,
      delay: 0,
      direction: "normal",
      duration: 15,
      fillMode: "forwards",
      iterationCount: "infinite",
      name: "Y360",
      animationPlayState: "running",
      timing: "linear",
   },
   anim2: {
      border: "",
      degreesHi: 15,
      degreesLow: -15,
      delay: 0,
      direction: "normal",
      duration: 8,
      fillMode: "forwards",
      animationPlayState: "running",
      iterationCount: "infinite",
      name: "X360",
      timing: "ease-in-out",
   },
   width: 160,
   depth: 150,
   height: 160,
   perspectiveOrigin: "50% 50%",
   perspective: 500,
   zIndex: 1,
   global: {
      css: configCss("#00f"),
      body: "DEFAULT",
   },
   showCenterDiv: false,
   toggle: false,
};

export const objSlice = createSlice({
   name: "obj",
   initialState,

   reducers: {
      setObj: (state: ObjState, action: PayloadAction<any>) => {
         return action.payload;
      },

      toggleObj: (obj) => console.log(obj),

      clearObj: (state) => initialState,
   },
});

export const { setObj, clearObj, toggleObj } = objSlice.actions;

export const selectObj: any = (state: RootState) => state.obj;

export default objSlice.reducer;
