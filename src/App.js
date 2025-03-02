import Base from "./Components/BaseComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import "./mainFont.css";
import { useState } from "react";

const lightTheme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      color: "#406674",
      fontWeight: 400,
      fontFamily: "Montserrat, sans-serif",
    },
    h2: {
      fontSize: "3rem",
      color: "#406674",
      fontWeight: 350,
      fontFamily: "Montserrat, sans-serif",
    },
    h3: {
      fontSize: "2rem",
      color: "#395B68",
      fontWeight: 300,
      fontFamily: "Montserrat, sans-serif",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Cairo, sans-serif",
      color: "#33515C",
    },
    body2: {
      fontSize: "1rem",
      fontFamily: "Cairo, sans-serif",
      color: "#33515C",
    },
  },
  palette: {
    primary: {
      main: "#547482",
      nuetral: "#768F9B",
    },
    secondary: {
      main: "#547482",
    },
    background: {
      default: "#B9CDD7",
    },
  },
});

const darkTheme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      color: "#97B4BF",
      fontWeight: 400,
      fontFamily: "Montserrat, sans-serif",
    },
    h2: {
      fontSize: "3rem",
      color: "#97B4BF",
      fontWeight: 350,
      fontFamily: "Montserrat, sans-serif",
    },
    h3: {
      fontSize: "2rem",
      color: "#8BA8B3",
      fontWeight: 300,
      fontFamily: "Montserrat, sans-serif",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Cairo, sans-serif",
      color: "#BBD1D9",
    },
    body2: {
      fontSize: "1rem",
      fontFamily: "Cairo, sans-serif",
      color: "#BBD1D9",
    },
  },
  palette: {
    primary: {
      main: "#9EB5BF",
      nuetral: "#8CA1A8",
    },
    secondary: {
      main: "#9EB5BF",
    },
    background: {
      default: "#2d4651",
    },
  },
});

function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <CssBaseline />
      <Base setMode={setMode} mode={mode} />
    </ThemeProvider>
  );
}

export default App;
