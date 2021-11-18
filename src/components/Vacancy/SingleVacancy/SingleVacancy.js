import { Container } from "react-bootstrap";
import classes from "./SingleVacancy.module.css";

const SingleVacancy = (props) => {
  const date = new Date(props.deadLine);
  const formatedDate = date.toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  return (
    <section className={classes.Vacancy}>
      <Container>
        <div className="vacancy-headInfo">
          <h2>{props.post}</h2>
          <div className={`${classes.VacancyInfoTags} d-flex`}>
            <h5>Advertisement No.: {props.advertiseNo}</h5>
            <h5>No.of vaccancy: {props.numberOfPost}</h5>
            <h5>Deadline: {formatedDate}</h5>
          </div>
          <hr />
        </div>
        <div className={`${classes.VacancyDesc} mb-4`}>
            <h3>Job Description</h3>
            <p><strong>Qualification:</strong> {props.qualification} </p>
            <p>{props.description}</p>
        </div>
        <div className={classes.VacancyDesc}>
            <h3>Roles &amp; Responsibilities</h3>
            <p>{props.rolesNResponsibility}</p>
        </div>
      </Container>
    </section>
  );
};

export default SingleVacancy;
