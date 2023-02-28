import classes from "./Start.module.css";
import { motion } from "framer-motion";

const Start = () => {
  const h1Animation = {
    hidden: {
      y: -100,
      opacity: 0,
      default: { ease: "linear" },
    },
    visible: {
      y: 0,
      opacity: 1,
      default: { ease: "linear" },
    },
  };

  const pAnimation = {
    hidden: {
      x: -400,
      opacity: 0,
      default: { ease: "linear" },
    },
    visible: {
      x: 0,
      opacity: 1,
      default: { ease: "linear" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={classes.start}>

      <div className={classes.start_inner}>
        <motion.h1 transition={{ duration: 0.5, delay: 0.3 }} variants={h1Animation}>Hello! I'm Alex.</motion.h1>
        <motion.p transition={{ duration: 0.5, delay: 0.5 }} variants={pAnimation}>
          I am a frontend developer with a passion for creativity. I believe
          that the perfect balance of functionality and creativity is essential
          for creating exceptional user experiences.
        </motion.p>
      </div>

    </motion.div>
  );
};

export default Start;
