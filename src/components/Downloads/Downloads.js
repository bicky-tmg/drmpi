import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getDownloads } from "../../lib/api";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";
import NoDownloadsFound from "./NoDownloadsFound";

import classes from "./Downloads.module.css";

const Downloads = () => {
  const {
    sendRequest,
    status,
    data: loadedDownloads,
    error,
  } = useHttp(getDownloads, true);

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
    (!loadedDownloads || loadedDownloads.length === 0)
  ) {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <NoDownloadsFound />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <section className={classes.Downloads}>
      <Container>
        <h5 className="mb-4">View and Download Documents</h5>
        <Row>
          <Col xs={12} md={8}>
            {loadedDownloads.map((downloadItem) => (
              <Card
                className="mb-4"
                style={{
                  boxShadow:
                    "0 .125rem .125rem -0.125rem rgba(31,27,45,.08),0 .25rem .75rem rgba(31,27,45,.08)",
                }}
                key={downloadItem.id}
              >
                <Card.Body>
                  <Link to={`/downloads/${downloadItem.id}`}>
                    {downloadItem.headingText}
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Downloads;
