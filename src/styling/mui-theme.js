import createTheme from "@mui/material/styles/createTheme";

export const muiTheme = createTheme({
  // typography: {
  //   // htmlFontSize: 8,
  // },
  // indicator: {
  //   background: "none"
  // },

  // palette: {
  //   primary: {
  //     main: "rgb(48, 48, 48)",
  //     borders: "0"
  //   },
  //   secondary: {
  //     main: "#ffffff",
  //     borders: "0"
  //   },
  //   error: {
  //     main: "#ff0000",
  //     borders: "0"
  //   },
  //   warning: {
  //     main: "#ff9800",
  //     borders: "0"
  //   },
  //   info: {
  //     main: "rgb(48, 48, 48)",
  //     borders: "0"
  //   },
  //   success: {
  //     main: "#4caf50",
  //     borders: "0"
  //   },
  // },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "1em",
          textTransform: "none",
          borderRadius: "0 10px 0 0",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "0",
        },
        indicator: {
          background: "none"
        },
      },
    },
  },
});