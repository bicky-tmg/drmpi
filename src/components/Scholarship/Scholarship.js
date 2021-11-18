import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import useHttp from "../../hooks/use-http";
import { getScholarship } from "../../lib/api";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";
import NoScholarshipFound from "./NoScholarshipFound";

import classes from "./Scholarship.module.css";

const Scholarship = () => {
  const {
    sendRequest,
    status,
    data: loadedScholarship,
    error,
  } = useHttp(getScholarship, true);

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
    (!loadedScholarship || loadedScholarship.length === 0)
  ) {
    return <NoScholarshipFound />;
  }
  return (
    <section className={classes.Scholarship}>
      <Container>
        <Table className="mb-0" striped bordered hover>
          <thead>
            <tr>
              <th>प्रतिकार्यक्रम छात्रवृत्ति</th>
              <th>संख्या</th>
              <th>छात्रवृत्ति</th>
            </tr>
          </thead>
          <tbody>
            {loadedScholarship.map((scholarshipItem) => (
              <tr key={scholarshipItem.id}>
                <td>{scholarshipItem.scholarshipType}</td>
                <td>
                  {scholarshipItem.numberofScholarship > 0
                    ? scholarshipItem.numberofScholarship
                    : null}
                </td>
                <td>{scholarshipItem.scholarship}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Scholarship;
