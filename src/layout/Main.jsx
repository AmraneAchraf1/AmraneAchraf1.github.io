import {  Container, Button as JoyBtn } from '@mui/joy'
import { Button } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <Container >
    <Button variant="outlined"  >4  ago</Button>
    <JoyBtn color="primary" >
    JoyBtn
    </JoyBtn>
    <Outlet />
    </Container>
  )
}

export default Main