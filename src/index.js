import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// setup mui with joyui
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider, extendTheme } from "@mui/joy/styles";

// styles
import "./index.css";
//pages
import Main from "./layout/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import { dark, light } from "@mui/material/styles/createPalette";

// Material UI theme configuration 
const materialTheme = materialExtendTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#62B250",
        
      },
      secondary: {
        main: "#1c1c1c",
        dark: "#acacac",
      },
      
      background: {
        default: "#1c1c1c",
        paper: "#1c1c1c",
      }
    },
  },
  {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
            color : "#FFFFFF",
          },
        },
      },
    },

  },
);

// JoyUI theme configuration 
const theme = extendTheme({
  colorSchemes: {
    light: {
      
      palette: {
        primary: {
          100: "#e0f0dc",
          200: "#c0e0b9",
          300: "#a1d196",
          400: "#81c173",
          500: "#62b250",
          600: "#4e8e40",
          700: "#3b6b30",
          800: "#274720",
          900: "#142410"
      },
      neutral: {
        100: "#d2d2d2",
        200: "#a4a4a4",
        300: "#777777",
        400: "#494949",
        500: "#1c1c1c",
        600: "#161616",
        700: "#111111",
        800: "#0b0b0b",
        900: "#060606"
      },
    },
  },
  },
  
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          color : "#FFFFFF",
        },
      },
    },
  },

});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MaterialCssVarsProvider defaultMode="dark"  theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
    <JoyCssVarsProvider defaultMode="dark"  theme={ theme} >
      <RouterProvider router={router} />
    </JoyCssVarsProvider>
  </MaterialCssVarsProvider>
);
