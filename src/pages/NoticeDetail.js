import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleNotice from "../components/Notice/SingleNotice/SingleNotice";
import Hero from "../components/UI/Hero/Hero";
import LoadingSpinner from "../components/UI/Spinner/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleNotice } from "../lib/api";

const NoticeDetail = () => {
  const params = useParams();
  const { noticeId } = params;
  const {
    sendRequest,
    status,
    data: loadedNotice,
    error,
  } = useHttp(getSingleNotice, true);

  useEffect(() => {
    sendRequest(noticeId);
  }, [sendRequest, noticeId]);

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

  if (status === "completed" && (!loadedNotice || loadedNotice.length === 0)) {
    return null;
  }

  return (
    <Fragment>
      <Hero
        title="Notice Details"
        breadCrumbItem={`notice / ${
          loadedNotice.title.length > 80
            ? `${loadedNotice.title.substring(0, 80)}...`
            : loadedNotice.title
        }`}
      />
      <SingleNotice
        key={loadedNotice.id}
        title={loadedNotice.title}
        location={loadedNotice.location}
        date={loadedNotice.date}
        noticeFiles={loadedNotice.noticeFiles}
      />
    </Fragment>
  );
};

export default NoticeDetail;
