import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useHttp from "../../hooks/use-http";
import { getResults } from "../../lib/api";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";
import DownloadResult from "./DownloadResult";

import classes from "./Results.module.css";

const Results = () => {
  const {
    sendRequest,
    status,
    data: loadedResults,
    error,
  } = useHttp(getResults, true);

  
  const [filterParam, setFilterParam] = useState("All");
  
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
    (!loadedResults || loadedResults.length === 0)
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
          Oops! File not found.
        </p>
      </div>
    );
  }

  const getFilterResults = (results) => {
    let filteredResults;
    if (filterParam === "All") {
      filteredResults = results;
    } else {
      filteredResults = results.filter((result) => {
        return result.courses.courseName === filterParam;
      });
    }
    return filteredResults;
  };

  return (
    <section className={classes.Results}>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="form-group">
              <select
                className="form-control mb-5"
                aria-label="Filter Results By Courses"
                value={filterParam}
                onChange={(event) => {
                  setFilterParam(event.target.value);
                }}
              >
                <option value="All">Filter By Courses</option>
                <option value="Diploma in Civil Engineering">
                  Diploma in Civil Engineering
                </option>
                <option value="Diploma in Information Technology">
                  Diploma in Information Technology
                </option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            {getFilterResults(loadedResults).map((resultItem) => (
              <Card
                className="mb-4"
                style={{
                  boxShadow:
                    "0 .125rem .125rem -0.125rem rgba(31,27,45,.08),0 .25rem .75rem rgba(31,27,45,.08)",
                }}
                key={resultItem.fileId}
              >
                <Card.Body>
                  <DownloadResult file={resultItem} />
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Results;
