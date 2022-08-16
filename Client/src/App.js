import { BrowserRouter as Router } from "react-router-dom";
import Page from "./Pages/Page";

//mui
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  //theme data
  let theme1 = createTheme({
    typography: {
      mode,
      primary: {
        main: "#073050",
      },
    },
    palette: {
      mode: mode,

      primary: {
        main: "#1A374D",
        button: "#2B4865",
      },
      status: {
        // danger: "",
      },
      background: {
        default: "#1A374D",
        paper: "#D8D8D8",
        button: "#2B4865",
      },
      divider: "#2B4865",
      secondary: {
        main: "#406882",
      },
      text: {
        primary: "#2B4865",
        secondary: "#fff",
      },
      success: {
        main: "#FEC260",
      },
      info: {
        main: "#1597BB",
      },
      error: {
        main: "#FF0000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme1}>
      <Router>
        <Page />
      </Router>
    </ThemeProvider>
  );
}

export default App;
