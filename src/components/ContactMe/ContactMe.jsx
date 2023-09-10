import React from "react";

import styles from "./styles.module.css";
import { Box, IconButton, Tooltip, Zoom } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactMe = () => {
  return (
    <Box className={styles.parent}>
      <Tooltip title="email" TransitionComponent={Zoom}>
        <IconButton
          aria-label="email"
          href="mailto:amrane.achraf17@gmail.com"
          size="large"
        >
          <EmailIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>

      <Tooltip title="whatsapp" TransitionComponent={Zoom}>
        <IconButton
          aria-label="whatsapp"
          href="https://wa.me/212628306387"
          target="_blank"
          size="large"
        >
          <WhatsAppIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>

      <Tooltip title="linkedin" TransitionComponent={Zoom}>
        <IconButton
          aria-label="linkedin"
          href="https://www.linkedin.com/in/achraf-amrane/"
          target="_blank"
          size="large"
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>


      <Tooltip title="instagram" TransitionComponent={Zoom}>
        <IconButton
          aria-label="instagram"
          href="https://www.instagram.com/achrafamran/"
          target="_blank"
          size="large"
        >
          <InstagramIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>

      <Tooltip title="facebook" TransitionComponent={Zoom}>
        <IconButton
          aria-label="facebook"
          href="https://www.facebook.com/achraf.amran"
          target="_blank"
          size="large"
        >
          <FacebookIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
   
    </Box>
  );
};

export default ContactMe;
