import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// setup mui with joyui
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

// styles
import "./index.css";
//pages
import Main from "./layout/Main";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import { CssBaseline } from "@mui/material";
import Projects from "./pages/Projects";
// Material UI theme configuration 
const theme = createTheme(
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
            borderRadius: "32px",
            color : "#FFFFFF",
          },
        },
      },
    },

  },
);



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
      {
        path: "/projects",
        element: <Projects />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider  theme={theme}>
    <CssBaseline />
      <RouterProvider router={router} />
   
  </ThemeProvider>
);
