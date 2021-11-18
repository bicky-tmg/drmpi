import { Fragment } from "react";
import Notice from "../components/Notice/Notice";
import Hero from "../components/UI/Hero/Hero";

const NoticePage = () => {
  return (
    <Fragment>
      <Hero title="Notice" breadCrumbItem="Notice" />
      <Notice />
    </Fragment>
  );
};

export default NoticePage;
