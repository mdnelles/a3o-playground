import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { FacesState, FaceType } from "./faces";

const configCss = (color: string) => {
   return `border: 1px solid ${color}; color:${color}; text-align:center; line-height:10;`;
};

const initialState: FaceType[] = [
   { name: "front", css: configCss("#F00"), body: "FRONT" },
   { name: "back", css: configCss("#00f"), body: "Back" },
   { name: "left", css: configCss("#00F"), body: "Left" },
   { name: "right", css: configCss("#F00"), body: "Right" },
   { name: "top", css: configCss("#eb9b34"), body: "Top" },
   { name: "top_rear", css: configCss("#118f7c"), body: "Top Rear" },
   { name: "top_front", css: configCss("#a31492"), body: "Top Front" },
   { name: "bottom_rear", css: configCss("#97a314"), body: "Bottom Rear" },
   { name: "bottom_front", css: configCss("#453721"), body: "Bottom Front" },
   { name: "bottom", css: configCss("#212f45"), body: "Bottom" },
];

export const facesSlice = createSlice({
   name: "faces",
   initialState,

   reducers: {
      setFaces: (state: FacesState, action: PayloadAction<any>) => {
         //console.log(action.payload);
         return action.payload;
      },
      clearFaces: (state) => initialState,
   },
});

export const { setFaces, clearFaces } = facesSlice.actions;

export const selectFaces = (state: RootState) => state.faces;

export default facesSlice.reducer;
