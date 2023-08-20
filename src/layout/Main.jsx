
import {  Container, useTheme } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../components/AppBar/AppBar'

const Main = () => {

  const theme = useTheme()
  console.log(theme);
  return (
    <Container >
    <AppBar />

    <Outlet />
    </Container>
  )
}

export default Main