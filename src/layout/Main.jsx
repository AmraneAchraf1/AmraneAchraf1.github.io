import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";

const Main = () => {


  return (
    <Container maxWidth="xl">
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default Main;
