import { Link } from "react-router-dom";

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Button.css";

const Button = (props) => {
  return (
    <div className={`main-btn ${props.btnClass}`}>
      <Link to={props.linkTo}>
        {props.btnText}
        {props.iconRequired ? (
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            className="text-white ml-2"
          />
        ) : null}
      </Link>
    </div>
  );
};

export default Button;
