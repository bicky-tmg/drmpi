import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import CareerImg from "../../assets/images/c.jpg";
import useHttp from "../../hooks/use-http";
import { getVacancy } from "../../lib/api";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";
import classes from "./Vacancy.module.css";
import VacancyList from "./VacancyList";

const Vacancy = () => {
  const {
    sendRequest,
    data: loadedVacancy,
    status,
    error,
  } = useHttp(getVacancy, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="text-center mb-5">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-center h3 mb-5">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedVacancy || loadedVacancy.length === 0)
  ) {
    return (
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#262c2c",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          No Vacancy available right now!
        </p>
      </div>
    );
  }
  return (
    <section className={classes.Career}>
      <Container>
        <Row>
          <Col md={8}>
            <div className={classes.CareerText}>
              <h1 className="text-capitalize mb-4">Career Opportunities</h1>
              <p className="lead">
                Enhance and grow your career by applying to work with our
                experienced experts.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={classes.CareerImage}>
              <Image src={CareerImg} fluid />
              <div></div>
            </div>
          </Col>
        </Row>
        <Row className={classes.CareerHiring}>
          <Col xs={12} className="text-center mb-5">
            <h3>We are Hiring</h3>
          </Col>
          <VacancyList vacancies={loadedVacancy} />
        </Row>
      </Container>
    </section>
  );
};

export default Vacancy;
