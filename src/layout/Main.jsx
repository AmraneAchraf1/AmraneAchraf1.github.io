import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const isLarge = useMediaQuery({ query: `(max-width: 1650px)` });

  console.log(isLarge);
  return (
    <Container 
    maxWidth={
      isLarge ? "lg" : "xl"
    }
    >
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default Main;
