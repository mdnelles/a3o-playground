import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../redux/store";
import { Face, SnackbarState } from "./snackbar";

const initFace: Face = {
   msg: "Welcome to the Employee App",
   severity: "info",
};

const initialState: SnackbarState | any = {
   visible: true,
   cubeFocus: 1,
   custom: [initFace, initFace, initFace, initFace, initFace], // using 5 here and ignoring ZERO address
};

export const snackbarSlice = createSlice({
   name: "snackbar",
   initialState,
   reducers: {
      setSnackbar: (state, action: PayloadAction<any>) => {
         const { msg = "", severity = "info", visible = true } = action.payload;

         const cubeFocus = state.cubeFocus + 1 <= 4 ? state.cubeFocus + 1 : 1;
         const tmp = state.custom;
         tmp[cubeFocus] = {
            msg,
            severity,
         };

         try {
            state.visible = visible;
            state.cubeFocus = cubeFocus;
            state.custom = tmp;
         } catch (error) {
            console.log(error);
         }
      },
      clearSnackbar: (state) => initialState,
      // Use the PayloadAction type to declare the contents of `action.payload`
   },
});

export const { setSnackbar, clearSnackbar } = snackbarSlice.actions;

export const selectSnackbar = (state: RootState) => state.snackbar.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const snackbarInit =
   (user: any): AppThunk =>
   (dispatch) => {
      dispatch(setSnackbar(user));
   };

export default snackbarSlice.reducer;
