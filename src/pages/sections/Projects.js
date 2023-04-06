import Card from "../../UI/Card";
import classes from "./Projects.module.css";
import Title from "../../UI/Title";
import Spacer from "../../UI/Spacer";

const Projects = () => {
  return (
    <Card>
      <Title functionLeft={"::("} functionRight={")"}>Projects - React</Title>
      <div className={`${classes.projects_flex} ${classes.full_width}`}>
        <a href="https://aerezart.github.io/treasure-hunt-game/" target="_blank" rel="noreferrer"  className={`${classes.project}`}>
          <p>https://</p>
          <div>
            <p>treasure-hunt-game</p>
          </div>
        </a>
        <a href="https://adamietz.pl/" target="_blank" rel="noreferrer"  className={`${classes.project} ${classes.disabled}`}>
          <p>https://</p>
          <div>
            <p>quizyfy.com (in development)</p>
          </div>
        </a>
      </div>
    </Card>
  );
};

export default Projects;
