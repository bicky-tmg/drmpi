import { useLocation } from "react-router-dom";
import classes from "./NoNoticeFound.module.css";

const NoNoticeFound = () => {
  const location = useLocation();
  return location.pathname === "/notice" ? (
    <div className={`${classes.NoNotices} mb-4`}>
      <p>No notices found!</p>
    </div>
  ) : null;
};

export default NoNoticeFound;
