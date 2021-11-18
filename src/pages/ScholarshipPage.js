import { Fragment } from "react";
import Scholarship from "../components/Scholarship/Scholarship";
import Hero from "../components/UI/Hero/Hero";

const ScholarshipPage = () => {
    return ( 
        <Fragment>
            <Hero title="Scholarship" breadCrumbItem="Scholarship " />
            <Scholarship />
        </Fragment>
     );
}
 
export default ScholarshipPage;