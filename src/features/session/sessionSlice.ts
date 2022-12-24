import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../redux/store";
import { SessionState } from "./session";

const initialState: SessionState = {
   init: true,
   cpOpen: true,
   darkMode: true,
};

export const sessionSlice = createSlice({
   name: "session",
   initialState,
   // The `reducers` field lets us define reducers and generate associated actions
   reducers: {
      setSession: (state, action: PayloadAction<SessionState>) =>
         action.payload,
      clearSession: (state) => initialState,
      // Use the PayloadAction type to declare the contents of `action.payload`
   },
});

export const { setSession, clearSession } = sessionSlice.actions;

export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
