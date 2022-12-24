import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { ExampleState, ExampleStateArr } from "./examples";

const configCss = (color: string) => {
   return `border: 1px solid ${color}; color:${color}; backface-visibility: visible; text-align:center; line-height:2; font-family: Arial, Helvetica, sans-serif; `;
};

const initialState: ExampleStateArr = [
   {
      name: "Wide Face",
      width: 400,
      depth: 2,
      height: 160,
      global: {
         css: configCss("#00a"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
      ],
   },
   {
      name: "Tall Face",
      width: 160,
      depth: 2,
      height: 400,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
      ],
   },
   {
      name: "Skeleton",
      width: 160,
      depth: 150,
      height: 160,
      global: {
         css: configCss("#0A0"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "bottom",
            body: "BOTTOM",
         },
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "BACK",
         },
         {
            name: "top_rear",
            body: "top_rear",
         },
         {
            name: "top_front",
            body: "top_front",
         },
         {
            name: "top",
            body: "TOP",
         },
         {
            name: "left",
            body: "LEFT",
         },
         {
            name: "right",
            body: "RIGHT",
         },
         {
            name: "bottom_rear",
            body: "bottom_rear",
         },
         {
            name: "bottom_front",
            body: "botton_front",
         },
      ],
   },
   {
      name: "Cube",
      width: 160,
      depth: 160,
      height: 160,
      global: {
         css: configCss("00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "bottom",
            body: "BOTTOM",
         },
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "BACK",
         },
         {
            name: "top",
            body: "TOP",
         },
         {
            name: "left",
            body: "LEFT",
         },
         {
            name: "right",
            body: "RIGHT",
         },
      ],
   },
   {
      name: "Ribbon",
      width: 160,
      depth: 150,
      height: 160,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "bottom",
            body: "BOTTOM",
         },
         {
            name: "top_rear",
            body: "TOP REAR",
         },
         {
            name: "back",
            body: "BACK",
            css: "",
         },
      ],
   },
   {
      name: "Slab Horizontal",
      width: 195,
      height: 29,
      depth: 195,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
         {
            name: "left",
            body: "Left",
         },
         {
            name: "right",
            body: "Right",
         },
         {
            name: "top",
            body: "Top",
         },
         {
            name: "bottom",
            body: "Bottom",
         },
      ],
   },
   {
      name: "Slab Horizontal From Above",
      width: 195,
      height: 29,
      depth: 195,
      perspectiveOrigin: "50% -500%",
      perspective: 425,
      anim1: {
         border: "",
         degreesHi: -35,
         degreesLow: 35,
         delay: 0,
         direction: "normal",
         duration: 15,
         fillMode: "forwards",
         iterationCount: "infinite",
         name: "wobY",
         animationPlayState: "running",
         timing: "linear",
      },
      anim2: { name: "noAnim" },
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
         {
            name: "left",
            body: "Left",
         },
         {
            name: "right",
            body: "Right",
         },
         {
            name: "top",
            body: "Top",
         },
         {
            name: "bottom",
            body: "Bottom",
         },
      ],
   },
   {
      name: "Slab Horizontal From Below",
      width: 195,
      height: 29,
      depth: 195,
      perspectiveOrigin: "50% 500%",
      perspective: 425,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      anim1: {
         border: "",
         degreesHi: -35,
         degreesLow: 35,
         delay: 0,
         direction: "normal",
         duration: 15,
         fillMode: "forwards",
         iterationCount: "infinite",
         name: "wobY",
         animationPlayState: "running",
         timing: "linear",
      },
      anim2: { name: "noAnim" },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
         {
            name: "left",
            body: "Left",
         },
         {
            name: "right",
            body: "Right",
         },
         {
            name: "top",
            body: "Top",
         },
         {
            name: "bottom",
            body: "Bottom",
         },
      ],
   },
   {
      name: "Slab Verticle",
      width: 29,
      height: 195,
      depth: 195,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
         {
            name: "left",
            body: "Left",
         },
         {
            name: "right",
            body: "Right",
         },
         {
            name: "top",
            body: "Top",
         },
         {
            name: "bottom",
            body: "Bottom",
         },
      ],
   },
   {
      name: "Tower",
      width: 100,
      height: 450,
      depth: 100,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
         {
            name: "left",
            body: "Left",
         },
         {
            name: "right",
            body: "Right",
         },
         {
            name: "top",
            body: "Top",
         },
         {
            name: "bottom",
            body: "Bottom",
         },
      ],
   },
   {
      name: "Two Pane",
      width: 200,
      height: 200,
      depth: 50,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
      ],
   },
   {
      name: "Canyon",
      width: 160,
      height: 160,
      depth: 68,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
         {
            name: "top",
            body: "Top",
         },
         {
            name: "bottom_rear",
            body: "Bottom Rear",
         },
         {
            name: "bottom_front",
            body: "Bottom Front",
         },
      ],
   },
   {
      name: "wings",
      width: 349,
      height: 57,
      depth: 136,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "Back",
         },
         {
            name: "top_rear",
            body: "Top Rear",
         },
         {
            name: "top_front",
            body: "Top Front",
         },
         {
            name: "bottom_rear",
            body: "Bottom Rear",
         },
         {
            name: "bottom_front",
            body: "Bottom Front",
         },
      ],
   },
   {
      name: "Open Box",
      width: 100,
      height: 118,
      depth: 118,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "back",
            css: " ",
            body: "Back",
         },
         {
            name: "left",
            css: " ",
            body: "Left",
         },
         {
            name: "right",
            css: " ",
            body: "Right",
         },
         {
            name: "top",
            css: " ",
            body: "Top",
         },
         {
            name: "bottom_front",
            css: " ",
            body: "Bottom Front",
         },
         {
            name: "bottom",
            css: " ",
            body: "Bottom",
         },
      ],
   },
   {
      name: "H",
      width: 349,
      height: 195,
      depth: 148,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "back",
            body: "Back",
         },
         {
            name: "top_rear",
            body: "top_rear",
         },
         {
            name: "bottom_rear",
            body: "bottom_rear",
         },
         {
            name: "top",
            css: " ",
            body: "top",
         },
         {
            name: "bottom",
            css: " ",
            body: "bottom",
         },
      ],
   },
   {
      name: "H split",
      width: 165,
      height: 183,
      depth: 112,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "back",
            body: "Back",
         },
         {
            name: "left",
            body: "Left",
         },
         {
            name: "right",
            body: "Right",
         },
         {
            name: "top_rear",
            body: "top_rear",
         },
         {
            name: "bottom_rear",
            body: "bottom_rear",
         },
      ],
   },
   {
      name: "Vertical Pane",
      width: 183,
      height: 461,
      depth: 17,
      global: {
         css: configCss("#00f"),
         body: "DEFAULT",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "bottom",
            body: "BOTTOM",
         },
         {
            name: "front",
            body: "FRONT",
         },
         {
            name: "back",
            body: "BACK",
         },
         {
            name: "top",
            body: "TOP",
         },
         {
            name: "left",
            body: "LEFT",
         },
         {
            name: "right",
            body: "RIGHT",
         },
      ],
   },
   {
      name: "Swing Simple",
      width: 195,
      height: 0,
      depth: 0,
      perspective: 80,
      global: {},
      anim1: {
         border: "",
         degreesHi: -15,
         degreesLow: 15,
         delay: 0,
         direction: "normal",
         duration: 2,
         fillMode: "forwards",
         iterationCount: "infinite",
         name: "swing",
         animationPlayState: "running",
         timing: "linear",
      },
      anim2: { name: "noAnim" },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            css: "border: 1px solid #00f;  color:#00f;  backface-visibility: visible;  text-align:center;  line-height:1;  font-family: Arial, Helvetica, sans-serif; font-size:50px;",
            body: "FRONT",
         },
      ],
   },
   {
      name: "Floating Text",
      width: 195,
      height: 0,
      depth: 0,
      perspectiveOrigin: "50% -250%",
      perspective: 355,
      global: {},
      anim1: {
         border: "",
         degreesHi: -55,
         degreesLow: 55,
         delay: 0,
         direction: "normal",
         duration: 8,
         fillMode: "forwards",
         iterationCount: "infinite",
         name: "pulseSM",
         animationPlayState: "running",
         timing: "linear",
      },
      anim2: {
         border: "",
         degreesHi: -25,
         degreesLow: 25,
         delay: 0,
         direction: "normal",
         duration: 3,
         fillMode: "forwards",
         iterationCount: "infinite",
         name: "wobX",
         animationPlayState: "running",
         timing: "ease-in-out",
      },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            css: "color:#00f;   backface-visibility: visible;   text-align:center;   line-height:1;   font-family: Arial, Helvetica, sans-serif;  font-size:50px; ",
            body: "FLOATING",
         },
      ],
   },
   {
      name: "Pulsing Box",
      width: 307,
      height: 160,
      depth: 46,
      perspectiveOrigin: "center center",
      perspective: 343,
      global: {},
      anim1: {
         border: "",
         degreesHi: -15,
         degreesLow: 15,
         delay: 0,
         direction: "normal",
         duration: 3,
         fillMode: "forwards",
         iterationCount: "infinite",
         name: "pulseLG",
         animationPlayState: "running",
         timing: "linear",
      },
      anim2: { name: "noAnim" },
      showCenterDiv: false,
      faces: [
         {
            name: "front",
            css: "border: 1px solid #00f; color:#00f; backface-visibility: visible; text-align:center; line-height:10; font-family: Arial, Helvetica, sans-serif;",
            body: "FRONT",
         },
         {
            name: "back",
            css: "border: 1px solid #00f; color:#00f; backface-visibility: visible; text-align:center; line-height:10; font-family: Arial, Helvetica, sans-serif;",
            body: "BACK",
         },
         {
            name: "left",
            css: "border: 1px solid #00f; color:#00f; backface-visibility: visible; text-align:center; line-height:10; font-family: Arial, Helvetica, sans-serif;",
            body: "LEFT",
         },
         {
            name: "right",
            css: "border: 1px solid #00f; color:#00f; backface-visibility: visible; text-align:center; line-height:10; font-family: Arial, Helvetica, sans-serif;",
            body: "RIGHT",
         },
      ],
   },
];

export const exampleSlice = createSlice({
   name: "examples",
   initialState,
   reducers: {
      clearObj: (state) => initialState,
   },
});

export const selectExample = (state: RootState) => state.examples;

export default exampleSlice.reducer;
