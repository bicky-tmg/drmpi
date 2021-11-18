import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import useHttp from "../../hooks/use-http";
import { getShortTermPrograms } from "../../lib/api";
import SectionTitle from "../UI/SectionTitle";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";

import "./ShortTermPrograms.css";
import ShortTermProgramsItem from "./ShortTermProgramsItem";

const ShortTermPrograms = () => {
  const {
    sendRequest,
    status,
    data: loadedShortTermPrograms,
    error,
  } = useHttp(getShortTermPrograms, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="text-center my-4">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return null;
  }

  if (status === "completed" && (!loadedShortTermPrograms || loadedShortTermPrograms.length === 0)) {
    return null;
  }
  
  return (
    <section className="section-short-term">
      <SectionTitle title="Short Term Program" />
      <div className="wrapper">
        <Container>
          <Row>
            <ShortTermProgramsItem shortTermPrograms={loadedShortTermPrograms}/>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ShortTermPrograms;
