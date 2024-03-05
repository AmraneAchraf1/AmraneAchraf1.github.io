
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const AppBar = () => {

  const [isToggeled, setToggle] = useState(false);

  // document.body.addEventListener("click", (e) => {
    
  //    if(e.target.className !== "styles_list_items__St+hK styles_is_open__0b9cl" && e.target.className !== "hamburger-react" && e.target.className !== "styles_list__rvPwP"){
  //     setToggle(false);
  //    }
    
  // });

  // window scroll position
  // const [scroll, setScroll] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScroll(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scroll]);

  // console.log(scroll);

  return (
    <header
        className={styles.appBar}
    >
      <nav
        className={styles.nav}
      >
        <ul>
            <NavLink to="/" end={true} className={({isActive}) => isActive ? styles.active : null } >
                <li>Home</li>
            </NavLink>
            <NavLink to="/about"  className={({isActive} ) => isActive ? styles.active : null } >
                <li>About</li>
            </NavLink>
            <NavLink to="/projects"  className={({isActive} ) => isActive ? styles.active : null } >
                <li> Projects </li>
            </NavLink>
        </ul>
      </nav>

      <div className={styles.list}>

        <div className={styles.icon}>
          <Hamburger rounded toggled={isToggeled} toggle={setToggle} />
        </div>

        <div className={`${styles.list_items} ${isToggeled ? styles.is_open : null}`} >
          <ul>
            <NavLink to="/" end={true} className={({isActive}) => isActive ? styles.active : null } onClick={() => setToggle(false)} >
                <li>Home</li>
            </NavLink>
            <NavLink to="/about"  className={({isActive} ) => isActive ? styles.active : null } onClick={() => setToggle(false)} >
                <li>About</li>
            </NavLink>
            <NavLink to="/projects"  className={({isActive} ) => isActive ? styles.active : null } onClick={() => setToggle(false)}  >
                <li> Projects </li>
            </NavLink>
          </ul>
        </div>

      </div>
    </header>
  );

  
};

export default AppBar;
