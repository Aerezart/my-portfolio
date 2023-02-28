import Card from "../../UI/Card";
import classes from "./Skills.module.css";
import Title from "../../UI/Title";
import Spacer from "../../UI/Spacer";
import { useSelector } from "react-redux";
import SkillsSlider from "./SkillsSlider";

const Skills = () => {
  let date_1 = new Date("10/25/2021");
  let date_2 = new Date();

  function differenceInMonths(date1, date2) {
    const monthDiff = date2.getMonth() - date1.getMonth();
    const yearDiff = date2.getYear() - date1.getYear();
    return monthDiff + yearDiff * 12;
  }

  const monthstinTotal = differenceInMonths(date_1, date_2);
  let yeartinDev = 0;
  if (monthstinTotal >= 12) {
    yeartinDev = Math.floor(monthstinTotal / 12);
  }
  const monthstinDev = monthstinTotal - yeartinDev * 12;

  const windowSize = useSelector((state) => state.ui.windowSize);

  const skillsContent = (
    <div className={classes.skills_flex}>
      <div>
        <h3 className="comment">//Programming</h3>
        <p>HTML, CSS, JS, React, PHP, Wordpress, Woocommerce</p>
      </div>
      <div>
        <h3 className="comment">//Design & Art</h3>
        <p>Blender3D, Adobe Photoshop, Adobe Illustrator, Substance Painter</p>
      </div>
      <div>
        <h3 className="comment">//Languages</h3>
        <div>
          <p>
            English<span>(</span>
            <span className="string">'en_EN'</span>, <span className="string">'B2'</span><span>)</span>,
          </p>
          <p>
            Polish<span>(</span>
            <span className="string">'pl_PL'</span>, <span className="string">'B2'</span><span>)</span>, 
          </p>
          <p>
            Russian<span>(</span>
            <span className="string">'ru_RU'</span>, <span className="string">'Native'</span><span>)</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      <Title functionLeft={"::("} functionRight={")"}>Skills</Title>

      {windowSize[0] <= 800 ? <SkillsSlider /> : skillsContent}

      <Spacer />
      <Title functionLeft={"::("} functionRight={")"}>Experience</Title>

      <h3 className={classes.time_in_dev}>
        const <span>timeInDevelopment</span> ={" "}
        <span className="string">'{yeartinDev}y'</span> + <span className="string">'{monthstinDev}m'</span>
      </h3>
    </Card>
  );
};

export default Skills;
