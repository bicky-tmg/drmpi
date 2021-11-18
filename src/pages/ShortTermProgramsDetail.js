import { Fragment } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import SingleShortTermProgram from "../components/Programs/SingleShortTermProgram/SingleShortTermProgram";
import Hero from "../components/UI/Hero/Hero";
import LoadingSpinner from "../components/UI/Spinner/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleShortTermProgram } from "../lib/api";

const ShortTermProgramsDetail = () => {
  const params = useParams();

  const { shortTermProgramsId } = params;

  const {
    sendRequest,
    status,
    data: loadedPrograms,
    error,
  } = useHttp(getSingleShortTermProgram, true);

  useEffect(() => {
    sendRequest(shortTermProgramsId);
  }, [sendRequest, shortTermProgramsId]);

  if (status === "pending") {
    return (
      <div className="text-center my-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-center h3 my-4">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedPrograms || loadedPrograms.length === 0)
  ) {
    return null;
  }
  return (
    <Fragment>
      <Hero
        title={loadedPrograms.headingText}
        breadCrumbItem={`short-term-programs / ${loadedPrograms.headingText}`}
      />
      <SingleShortTermProgram
        id={loadedPrograms.id}
        backgroundImageURL={loadedPrograms.backgroundImageURL}
        headingText={loadedPrograms.headingText}
        description={loadedPrograms.description}
      />
    </Fragment>
  );
};

export default ShortTermProgramsDetail;
