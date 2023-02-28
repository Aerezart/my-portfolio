import classes from "./Card.module.css";
import { motion } from "framer-motion";

const Card = (props) => {
  const cardAnimation = {
    hidden: {
      x: -100,
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
      className={classes.card}
      variants={cardAnimation}
      transition={{ duration: 0.5 }}>
      <div className="inner-content-padding">{props.children}</div>
    </motion.div>
  );
};

export default Card;
