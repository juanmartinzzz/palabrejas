import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
  //   type: "dark",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Poppins"].join(","),
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 24,
    },
    h3: {
      fontSize: 18,
    },
    h4: {
      fontSize: 14,
    },
    h5: {
      fontSize: 10,
    },
    h6: {
      fontSize: 8,
    },
  },
});
