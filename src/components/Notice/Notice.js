import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllNotices } from "../../lib/api";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";
import NoticeList from "./NoticeList";
import NoNoticeFound from "./NoNoticeFound";
import SectionTitle from "../UI/SectionTitle";

import classes from "./Notice.module.css";

const Notice = () => {
  const {
    sendRequest,
    status,
    data: loadedNotices,
    error,
  } = useHttp(getAllNotices, true);

  const location = useLocation();

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
    return location.pathname === "/notice" ? (
      <p className="text-center h3 mb-5">{error}</p>
    ) : null;
  }

  if (
    status === "completed" &&
    (!loadedNotices || loadedNotices.length === 0)
  ) {
    return <NoNoticeFound />;
  }

  const extractedNotices = loadedNotices.slice(0, 4);

  return (
    <section className={classes.Notice}>
      {location.pathname === "/notice" ? null : <SectionTitle title="Notice" />}
      <NoticeList
        notices={
          location.pathname === "/notice" ? loadedNotices : extractedNotices
        }
      />
    </section>
  );
};

export default Notice;
