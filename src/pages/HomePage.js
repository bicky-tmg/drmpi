import { Fragment } from "react";
import Slider from "../components/UI/Slider/Slider";
import AcademicPrograms from "../components/Programs/AcademicPrograms";
import Notice from "../components/Notice/Notice";
import ShortTermPrograms from "../components/Programs/ShortTermPrograms";
import Message from "../components/Message/Message";

const HomePage = () => {
  return (
    <Fragment>
      <Slider />
      <AcademicPrograms />
      <Message />
      <Notice />
      <ShortTermPrograms />
    </Fragment>
  );
};

export default HomePage;
