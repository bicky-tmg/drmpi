import { Fragment } from "react";
import Hero from "../components/UI/Hero/Hero";
import Vacancy from "../components/Vacancy/Vacancy";

const VacancyPage = () => {
    return (
        <Fragment>
            <Hero title="Vacancy" breadCrumbItem="Vacancy" />
            <Vacancy />
        </Fragment>
      );
}
 
export default VacancyPage;