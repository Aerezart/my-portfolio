import Card from "../../UI/Card";
import classes from "./Projects.module.css";
import Title from "../../UI/Title";
import Spacer from "../../UI/Spacer";

const Projects = () => {
  return (
    <Card>
      <Title functionLeft={"::("} functionRight={")"}>Projects - React</Title>
      <div className={`${classes.projects_flex} ${classes.full_width}`}>
        <a href="https://adamietz.pl/" target="_blank" rel="noreferrer"  className={`${classes.project} ${classes.disabled}`}>
          <p>https://</p>
          <div>
            <p>quizyfy.com (in development)</p>
          </div>
        </a>
      </div>
      <Spacer />
      <Title functionLeft={"::("} functionRight={")"}>Projects - Wordpress</Title>
      <div className={classes.projects_flex}>
        <a href="https://adamietz.pl/" target="_blank" rel="noreferrer"  className={classes.project}>
          <p>https://</p>
          <div>
            <p>adamietz.pl</p>
          </div>
        </a>
        <a href="https://eurotronic.pl/" target="_blank" rel="noreferrer"  className={classes.project}>
          <p>https://</p>
          <div>
            <p>eurotronic.pl</p>
          </div>
        </a>
      </div>
    </Card>
  );
};

export default Projects;
