import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import me from "./me.svg";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/reducer/ui/ModalSlice";
import frCv from "../../assets/cv/fr.pdf"
const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  const dispatch = useDispatch();

  return (
    <>
      <Box className={styles.parent}>
        <Box className={styles.left}>
          <div className={styles.one}>
            <h2> Hi i'm </h2>
            <h1 className={styles.name}> ACHRAF AMRANE </h1>
          </div>

          <div className={styles.two}>
            <h1> Full Stack </h1>
            <h2> Developer </h2>
          </div>

          <div className={styles.img_mobile}>
            <img src={me} alt="me" />
          </div>

          {isMobile ? (
            <ReadMoreReact
              readMoreText="...read more"
              min={75}
              ideal={80}
              max={300}
              text={
                "Experienced full-stack developer specializing in Laravel, React,PHP, JavaScript, and Python. Skilled in Agile and DevOps practices.Committed to crafting innovative, user-centric applications for optimal client and user satisfaction."
              }
            />
          ) : (
            <Typography>
   
              Experienced full-stack developer specializing in Laravel,
              React,PHP, JavaScript, and Python. Skilled in Agile and DevOps
              practices.Committed to crafting innovative, user-centric
              applications for optimal client and user satisfaction.
            </Typography>
          )}

          <div className={styles.btns}>
            <Button
              variant="contained"
              onClick={() =>
                dispatch(openModal({ componentName: "ContactMe" }))
              }
            >
              
              Contact Me
            </Button>
            <Button variant="outlined" download="Amrane Achraf" href={frCv} target="_blank" > Download CV </Button>
          </div>
        </Box>

        <Box className={styles.right}>
          <div className={styles.img}>
            <img src={me} alt="me" />
          </div>
        </Box>
      </Box>

      <Box className={styles.box}>
        <div className={styles.visitors}>
          <h1> Bac + 2 </h1>
          <span className={styles.divider}> </span>
          <h2> Education </h2>
        </div>

        <div className={styles.projects}>
          <h1> 03 </h1>
          <span className={styles.divider}> </span>
          <h2> Projects </h2>
        </div>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
        }}
      ></Box>
    </>
  );
};

export default Home;
