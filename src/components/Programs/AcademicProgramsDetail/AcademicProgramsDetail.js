import { Tab } from "bootstrap";
import { Fragment } from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useHttp from "../../../hooks/use-http";
import { getSingleAcademicPrograms } from "../../../lib/api";
import Hero from "../../UI/Hero/Hero";
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner";

import classes from "./AcademicProgramsDetail.module.css";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const AcademicProgramsDetail = () => {
  const params = useParams();

  const { courseId } = params;

  const {
    sendRequest,
    status,
    data: loadedCourse,
    error,
  } = useHttp(getSingleAcademicPrograms, true);

  useEffect(() => {
    sendRequest(courseId);
  }, [sendRequest, courseId]);

  if (status === "pending") {
    return (
      <div className="text-center my-5">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-center h3 my-5">{error}</p>;
  }

  if (status === "completed" && (!loadedCourse || loadedCourse.length === 0)) {
    return null;
  }

  let courseImage;

  if (loadedCourse.courseImages.length === 1) {
    courseImage = (
      <div className={classes.CourseImg}>
        {loadedCourse.courseImages.map((itemImage) => (
          <Image
            key={itemImage.backgroundImageId}
            src={itemImage.backgroundImageURL}
            className={classes.img}
          />
        ))}
      </div>
    );
  }

  if (loadedCourse.courseImages.length > 1) {
    courseImage = (
      <Swiper
        autoplay={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {loadedCourse.courseImages.map((itemImage) => (
          <SwiperSlide key={itemImage.backgroundImageId}>
            <div className={classes.CourseImg}>
              <Image
                src={itemImage.backgroundImageURL}
                className={classes.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <Fragment>
      <Hero
        title="Course Details"
        breadCrumbItem={`courses / ${loadedCourse.courseName}`}
      />
      <section className={classes.CourseDetails}>
        <Container>
          <Row>
            <Col xs={12}>{courseImage}</Col>
            <Col xs={12} lg={9}>
              <div className={classes.CourseTitle}>
                <h2>{loadedCourse.courseName}</h2>
                <div className={`${classes.CourseYear} d-flex`}>
                  <h5>{loadedCourse.courseLength} years course</h5>
                  <h5>{loadedCourse.courseSem} Semester</h5>
                </div>
                <div className={classes.TabContainer}>
                  <Tabs defaultActiveKey="overview" className="border-0">
                    <Tab eventKey="overview" title="Overview">
                      <p>{loadedCourse.courseDescription}</p>
                    </Tab>
                    <Tab eventKey="curriculum" title="Curriculum">
                      <p>{loadedCourse.curriculumDescription}</p>
                      <p>
                        <strong>Mode of Study</strong>:{" "}
                        {loadedCourse.courseModeOfStudy}
                      </p>
                      <p>
                        <strong>Shift</strong>: {loadedCourse.courseShift}
                      </p>
                      <p>
                        <strong>Length of Study</strong>:{" "}
                        {loadedCourse.courseLength} years
                      </p>
                    </Tab>
                    <Tab eventKey="carrier" title="Carrier Opportunity">
                      <p>{loadedCourse.careerOpportunityDescription}</p>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className={classes.SideContainer}>
                <h2 className="mb-5">Instructors</h2>
                {loadedCourse.courseInstructorDetails.map((instructorItem) => (
                  <div className={classes.InstImg} key={instructorItem.id}>
                    <Image src={instructorItem.instructorImageURL} fluid />
                    <div className={classes.InstDes}>
                      <h4>{instructorItem.instructorName}</h4>
                      <h5>{instructorItem.instructorDesignation}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AcademicProgramsDetail;
