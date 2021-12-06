import { Fragment } from "react";
import Slider from "../components/UI/Slider/Slider";
import AcademicPrograms from "../components/Programs/AcademicPrograms";
import Notice from "../components/Notice/Notice";
import ShortTermPrograms from "../components/Programs/ShortTermPrograms";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

const HomePage = () => {
  return (
    <Fragment>
      <Slider />
      <AcademicPrograms />
      <WelcomeMessage />
      <Notice />
      <ShortTermPrograms />
    </Fragment>
  );
};

export default HomePage;
