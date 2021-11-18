import { Fragment, useEffect } from "react";
import { useParams } from "react-router";
import Hero from "../components/UI/Hero/Hero";
import LoadingSpinner from "../components/UI/Spinner/LoadingSpinner";
import SingleVacancy from "../components/Vacancy/SingleVacancy/SingleVacancy";
import useHttp from "../hooks/use-http";
import { getSingleVacancy } from "../lib/api";

const VacancyDetail = () => {
  const params = useParams();

  const { vacancyId } = params;

  const {
    sendRequest,
    data: loadedVacancy,
    status,
    error,
  } = useHttp(getSingleVacancy, true);

  useEffect(() => {
    sendRequest(vacancyId);
  }, [sendRequest, vacancyId]);

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
    (status === "completed") &
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
          Sorry, the requested vacancy is not available right now!
        </p>
      </div>
    );
  }

  return (
    <Fragment>
      <Hero
        title="Vacancy Details"
        breadCrumbItem={`Vacancy / ${
          loadedVacancy.post.length > 30
            ? `${loadedVacancy.post.substring(0, 30)}...`
            : loadedVacancy.post
        }`}
      />
      <SingleVacancy
        id={loadedVacancy.id}
        post={loadedVacancy.post}
        numberOfPost={loadedVacancy.numberOfPost}
        qualification={loadedVacancy.qualification}
        deadLine={loadedVacancy.deadLine}
        advertiseNo={loadedVacancy.advertiseNo}
        description={loadedVacancy.description}
        rolesNResponsibility={loadedVacancy.rolesNResponsibility}
      />
    </Fragment>
  );
};

export default VacancyDetail;
