import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { FaPaintBrush } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";

const Nav = (props) => {
  const [activeNav, setActiveNav] = useState("#");
  const [openedNav, setOpenedNav] = useState(false);

  useEffect(() => {

    if (props.scrollPos < props.windowHeight) {
      setActiveNav("#start");
    } else if (props.scrollPos < props.windowHeight * 2) {
      setActiveNav("#about-me");
    } else if (props.scrollPos < props.windowHeight * 3) {
      setActiveNav("#skills");
    } else if (props.scrollPos < props.windowHeight * 4) {
      setActiveNav("#projects");
    } else if (props.scrollPos < props.windowHeight * 5) {
      setActiveNav("#art");
    }
  }, [props.scrollPos, props.windowHeight]);



  return (
    <nav className={`${classes.nav} ${openedNav ? classes.active : ""}`}>
      <Link
        to="#start"
        onClick={() => setActiveNav("#start")}
        className={activeNav === "#start" ? classes.active : ""}
      >
        <AiFillHome />
      </Link>
      <Link
        to="#about-me"
        onClick={() => setActiveNav("#about-me")}
        className={activeNav === "#about-me" ? classes.active : ""}
      >
        <IoPerson />
      </Link>
      <Link
        to="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? classes.active : ""}
      >
        <FaCode />
      </Link>
      <Link
        to="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? classes.active : ""}
      >
        <GoBrowser />
      </Link>
      <Link
        to="#art"
        onClick={() => setActiveNav("#art")}
        className={activeNav === "#art" ? classes.active : ""}
      >
        <FaPaintBrush />
      </Link>
      <button onClick={() => setOpenedNav(!openedNav)}>
        {openedNav ? "+" : "-"}
      </button>
    </nav>
  );
};

export default Nav;
