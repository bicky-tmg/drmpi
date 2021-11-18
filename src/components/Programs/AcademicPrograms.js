import { Container, Row, Col } from "react-bootstrap";

import SectionTitle from "../UI/SectionTitle";
import ProgContent from "./ProgContent";
import ProgIcon from "./ProgIcon";

import classes from "./AcademicPrograms.module.css";

import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";
import { getAcademicPrograms } from "../../lib/api";

const AcademicPrograms = () => {
  const {
    sendRequest,
    status,
    data: loadedCourses,
    error,
  } = useHttp(getAcademicPrograms, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="text-center my-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (
    status === "completed" &&
    (!loadedCourses || loadedCourses.length === 0)
  ) {
    return null;
  }


  return (
    <section className={classes["section-academic"]}>
      <Container>
        <SectionTitle title="Academic Programs" />
        <Row>
          <Col xs={12} lg={6}>
            <Row className={classes["prog-block"]}>
              <Col xs={12} sm={8}>
                <ProgContent
                  title={loadedCourses[1].courseName}
                  text={
                    loadedCourses[1].courseDescription.length > 110
                      ? `${loadedCourses[1].courseDescription.substring(
                          0,
                          110
                        )}...`
                      : loadedCourses[1].courseDescription
                  }
                  btnClass="left-btn"
                  id={loadedCourses[1].id}
                />
              </Col>
              <Col sm={4} className="d-none d-sm-block">
                <ProgIcon icon={icon1} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6}>
            <Row
              className={`${classes["prog-block"]} ${classes["custom-block"]}`}
            >
              <Col sm={4} className="d-none d-sm-block">
                <ProgIcon icon={icon2} />
              </Col>
              <Col xs={12} sm={8}>
                <ProgContent
                  title={loadedCourses[0].courseName}
                  text={
                    loadedCourses[0].courseDescription.length > 110
                      ? `${loadedCourses[0].courseDescription.substring(
                          0,
                          110
                        )}...`
                      : loadedCourses[0].courseDescription
                  }
                  btnClass="right-btn"
                  id={loadedCourses[0].id}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AcademicPrograms;
