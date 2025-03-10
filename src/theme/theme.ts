import { createTheme } from "@mui/material";

// Define light and dark themes
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00695c",
    },
    background: {
      paper: "#fafafa",
      default: "#cfd8dc",
    },
    text: {
      primary: "#000000",
    },
    secondary: {
      main: "#ef6c00",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: "Fira Code, monospace",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#569cd6", // VS Code blue
    },
    secondary: {
      main: "#4ec9b0", // VS Code teal
    },
    background: {
      default: "#1e1e1e", // VS Code background
      paper: "#252526", // VS Code sidebar background
    },
    text: {
      primary: "#d4d4d4", // VS Code primary text
      secondary: "#4ec9b0", // VS Code secondary text (yellow)
    },
  },
  typography: {
    fontFamily: "Fira Code, monospace",
  },
});
