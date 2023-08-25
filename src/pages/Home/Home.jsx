
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
import me from "./me.svg"
const Home = () => {
  return (
    <Box className={styles.parent} >

      <Box className={styles.left} >
        <div className={styles.one}> 
        <h2> Hi i'm </h2>
        <h1 className={styles.name} > ACHRAF AMRANE </h1>
        </div>

        <div className={styles.two}>
        <h1> Full Stack </h1>
        <h2> Developer </h2>
        </div>

        <div className={styles.img_mobile} >
        <img src={me} alt='me' />
        </div>

        <Typography >
        Experienced full-stack developer specializing in Laravel, React, PHP, JavaScript, and Python. Skilled in Agile and DevOps practices. 
        Committed to crafting innovative, user-centric applications for optimal client and user satisfaction.
        </Typography>

        <div className={styles.btns} >
         <Button variant='contained' > Contact Me </Button>
          <Button variant='outlined' > Download CV </Button>
        </div>
      </Box>


      <Box className={styles.right} >
        <div className={styles.img} >
        
        <img src={me} alt='me' onLoad={(e) => console.log(e) } />
       
        </div>
      </Box>

    </Box>
  )
}

export default Home