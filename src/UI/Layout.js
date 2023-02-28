import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import Background from "./Background";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";

const Layout = () => {
 
  const [scrollPos, setScrollPos] = useState(0);
  const scrollContainer = useRef();
  const windowSize = useSelector(state => state.ui.windowSize)


  useEffect(() => {
    let timer;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setScrollPos(scrollContainer.current.scrollTop);
      }, 100);
    };
    scrollContainer.current.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.current.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);




  return (
    <div id={classes.layout}>
      <div className={classes.layout_bg}></div>
      <div className={classes.layout_animation}></div>

      <div className={classes.wrapper} ref={scrollContainer}>
        <Background />

        <div className={classes.content}>
          <Nav windowHeight={windowSize[1]} scrollPos={scrollPos} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
