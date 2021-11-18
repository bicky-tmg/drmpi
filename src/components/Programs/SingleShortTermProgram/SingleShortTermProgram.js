import { Col, Container, Image, Row } from "react-bootstrap";

import classes from "./SingleShortTermProgram.module.css";

const SingleShortTermPrograms = (props) => {

  return (
    <section className={classes.Program}>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className={classes.Image}>
                <Image src={props.backgroundImageURL} />
            </div>
            <div className={classes.ProgramContent}>
              <h2 className="mb-3">{props.headingText}</h2>
              <p>{props.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleShortTermPrograms;
