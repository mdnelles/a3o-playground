import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter basename={process.env.PUBLIC_URL}>
            <CssBaseline />
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);
