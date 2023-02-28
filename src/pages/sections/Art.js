import Card from "../../UI/Card";
import classes from "./Art.module.css";
import art1 from "../../images/art1.jpg";
import art2 from "../../images/art2.jpg";
import art3 from "../../images/art3.jpg";
import Title from "../../UI/Title";
import { useSelector } from "react-redux";
import ArtSlider from "./ArtSlider";

const Art = () => {
  const windowSize = useSelector((state) => state.ui.windowSize);
  const artContent = (
    <div className={classes.art}>
      <div>
        <img src={art1} alt="" />
      </div>
      <div>
        <img src={art2} alt="" />
      </div>
      <div>
        <img src={art3} alt="" />
      </div>
    </div>
  );

  return (
    <Card>
      <Title functionLeft={"::("} functionRight={")"}>Art</Title>

      {windowSize[0] <= 850 ? <ArtSlider /> : artContent}

      <a className={classes.see_more} href="https://www.instagram.com/aerezart/" target="_blank" rel="noreferrer">
        See more
      </a>
    </Card>
  );
};

export default Art;
