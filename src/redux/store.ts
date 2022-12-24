import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sessionReducer from "../features/session/sessionSlice";
import objReducer from "../features/obj/objSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";
import facesReducer from "../features/faces/facesSlice";
import editsReducer from "../features/edits/editsSlice";
import threedReducer from "../features/threed/threedSlice";
import dialogReducer from "../features/dialog/dialogSlice";
import examplesReducer from "../features/examples/examplesSlice";
import ThemesReducer from "../features/themes/themeSlice";

export const store = configureStore({
   reducer: {
      session: sessionReducer,
      snackbar: snackbarReducer,
      obj: objReducer,
      faces: facesReducer,
      edits: editsReducer,
      threed: threedReducer,
      dialog: dialogReducer,
      examples: examplesReducer,
      themes: ThemesReducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
