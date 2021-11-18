import { Fragment } from "react";
import { Image } from "react-bootstrap";

import "./SlideItem.css";

const SlideItem = (props) => {
  return (
    <Fragment>
      <div className="slide-img">
        <Image src={props.image} />
      </div>
      <div className="slide-des">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </Fragment>
  );
};

export default SlideItem;
