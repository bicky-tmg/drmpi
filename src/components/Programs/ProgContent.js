import Button from "../UI/Button/Button";

import classes from "./ProgContent.module.css";

const ProgContent = (props) => {
  return (
    <div className={classes["prog-content"]}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <Button btnClass={props.btnClass} btnText="View More" linkTo={`/courses/${props.id}`} iconRequired/>
    </div>
  );
};

export default ProgContent;
