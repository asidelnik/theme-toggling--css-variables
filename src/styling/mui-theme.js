import createTheme from "@mui/material/styles/createTheme";

export const muiTheme = createTheme({
  typography: {
    htmlFontSize: 16,
  },
  palette: {
    primary: {
      main: "rgb(49, 150, 148)",
      borders: "0"
    },
    secondary: {
      main: "#ffffff",
      borders: "0"
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "1em",
          textTransform: "none",
          borderRadius: "10px 10px 0 0",
          padding: "0 20px",
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

/*
error: {
  main: "#ff0000",
  borders: "0"
},
warning: {
  main: "#ff9800",
  borders: "0"
},
info: {
  main: "rgb(48, 48, 48)",
  borders: "0"
},
success: {
  main: "#4caf50",
  borders: "0"
},
*/