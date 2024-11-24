import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { colorSchemes, getDesignTokens, typography } from "./themePrimitives";
import dataDisplayCustomizations from "./customizations/dataDisplay";

const theme = createTheme({
  colorSchemes,
  typography,
  components: { ...dataDisplayCustomizations },
});

function AppTheme({ children }) {
  return (
    <ThemeProvider theme={theme} defaultMode="light">
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
