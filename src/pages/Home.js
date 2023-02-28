import classes from "./Home.module.css";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Start from "./sections/Start";
import AboutMe from "./sections/AboutMe";
import Art from "./sections/Art";

const Home = () => {
  return (
    <>
      <div className={classes.section} id="start">
        <Start />
      </div>
      <div className={classes.section} id="about-me">
        <AboutMe />
      </div>
      <div className={classes.section} id="skills">
        <Skills />
      </div>
      <div className={classes.section} id="projects">
        <Projects />
      </div>
      <div className={classes.section} id="art">
        <Art />
      </div>
    </>
  );
};

export default Home;
