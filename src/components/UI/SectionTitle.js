import Image from "react-bootstrap/Image";

import classes from "./SectionTitle.module.css";
import divider from "../../assets/images/divider.png";

const SectionTitle = (props) => {
  return (
    <div className={classes.title}>
      <h2>{props.title}</h2>
      <div className={`${classes["divider"]}`}>
        <Image className="mx-auto mt-4 mb-0" src={divider} fluid />
      </div>
    </div>
  );
};

export default SectionTitle;
