import Image from "react-bootstrap/Image";

import classes from "./ProgIcon.module.css";

const ProgIcon = (props) => {
  return (
    <div className={`${classes["prog-icon"]}`}>
      <Image src={props.icon} fluid />
    </div>
  );
};

export default ProgIcon;
