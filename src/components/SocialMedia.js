import React from "react";
import classes from "./SocialMedia.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoCodeDownloadSharp } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <div className={classes.cont}>
      <div className={classes.social}>
        <a href="https://www.linkedin.com/in/alex-orlov-79417a243/" target="_blank" rel="noreferrer" >
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/aerezart/" target="_blank" rel="noreferrer" >
          <BsInstagram />
        </a>
        <a href="https://github.com/Aerezart" target="_blank" rel="noreferrer" >
          <BsGithub />
        </a>
      </div>
      <a href="https://github.com/Aerezart" className={classes.cv}>
        <p>CV</p>
        <IoCodeDownloadSharp />
      </a>
    </div>
  );
};

export default SocialMedia;
