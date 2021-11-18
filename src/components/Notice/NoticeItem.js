import { Col } from "react-bootstrap";

import Button from "../UI/Button/Button";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./NoticeItem.module.css";

const NoticeItem = (props) => {
  const date = new Date(props.date);
  const formatedDate = date.toLocaleDateString('en-GB');
  return (
    <Col xs={12} lg={6}>
      <div className={`${classes["notice-wrapper"]} ${classes["left-notice"]}`}>
        <div className={`${classes["date-box"]} mb-2`}>
          <FontAwesomeIcon icon={faCalendar} className="highlight" />
          <span>{formatedDate}</span>
        </div>
        <h2>{props.title.length > 80 ? `${props.title.substring(0, 80)}...` : props.title}</h2>
        <p className="mb-0">{props.location}</p>
        <Button
          btnClass="notice-btn"
          btnText="View More"
          iconRequired={false}
          linkTo={`/notice/${props.id}`}
        />
      </div>
    </Col>
  );
};

export default NoticeItem;
