import React from "react";
import Card from "../../UI/Card";
import SocialMedia from "../../components/SocialMedia";
import Title from "../../UI/Title";

const AboutMe = () => {
  return (
    <Card>
      <Title functionLeft={"::("} functionRight={")"}>About Me</Title>
      <div className="flex_cont">
        <div>
          <p>
            As a frontend developer, I am a creative problem solver who enjoys
            tackling challenges and finding elegant solutions. I have always
            loved puzzles and riddles, and I bring that same analytical mindset
            to my work in web development. In addition to programming, I have a
            variety of hobbies, including drawing and 3D art. I also enjoy web
            design, which gives me a chance to combine my technical skills with
            my eye for aesthetics. Ultimately, I love programming because it
            allows me to bring my ideas to life and create digital experiences
            that are both functional and beautiful.
          </p>
          <SocialMedia />
        </div>
        <div></div>
      </div>
    </Card>
  );
};

export default AboutMe;
