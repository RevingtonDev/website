import { AppBarColor, colorSchemes } from "../themePrimitives";

const dataDisplayCustomizations = {
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: "10px 0",
        backgroundColor: "transparent",
        color: "black",
        boxShadow: "none",
      }),
    },
  },
  MuiCssBaseline: {
    styleOverrides: (themeParam) => ({
      body: {
        fontFamily: "Poppins",
      },
    }),
  },
};

export default dataDisplayCustomizations;
