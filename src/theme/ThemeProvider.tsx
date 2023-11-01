import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["REM", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#a9afc3",
    },
    text: {
      primary: "#c3cadf",
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        sx: {
          backgroundColor: "rgba(255, 255, 255, 0.035)",
          color: "primary.main",
          borderRadius: "8px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        sx: {
          padding: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#233554",
        },
      },
    },
  },
});

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
