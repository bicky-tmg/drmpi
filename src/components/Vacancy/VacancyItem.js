import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./VacancyItem.module.css";

const VacancyItem = (props) => {
  const date = new Date(props.deadline);
  const formatedDate = date.toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  return (
    <Col md={4} sm={6} xs={12}>
      <Link to={`/vacancy/${props.id}`}>
        <div className={classes.CareerBox}>
          <div className={classes.CareerBody}>
            <h4>{props.post}</h4>
            <p className="mb-0">{formatedDate}</p>
          </div>
          <div className={classes.AdvertNum}>
              Advertise No. <span>{props.advertNum}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default VacancyItem;
