import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
   palette: {
      mode: "dark",
      primary: {
         main: "#4172d8",
         light: "#5a87e6",
         dark: "#215ad2",
      },
      secondary: {
         main: "#f50057",
         light: "#f33276",
         dark: "#ad023e",
         contrastText: "#ffffff",
      },
      background: {
         default: "#111",
         paper: "#333",
      },
   },
});

export const lightTheme = createTheme({
   palette: {
      mode: "light",
      background: {
         default: "#ccc",
         paper: "#ddd",
      },
   },
});
