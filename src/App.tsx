import "./App.css";
import React from "react";
import { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./components/themes/Theme";
import { useAppSelector } from "./redux/hooks";
import Main from "./pages/Main";

import CssBaseline from "@mui/material/CssBaseline";
import { SessionState } from "./features/session/session";

function App() {
   const session: SessionState = useAppSelector((state) => state.session);

   useEffect(() => {
      /*toggle */
      console.log("Dark Mode toggled: " + session.darkMode);
   }, [session.darkMode]);

   return (
      <>
         <Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider
               theme={session.darkMode !== true ? lightTheme : darkTheme}
            >
               <CssBaseline />

               <Main />
            </ThemeProvider>
         </Suspense>
      </>
   );
}

export default App;
