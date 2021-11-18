import { Fragment } from "react";
import Results from "../components/Results/Results";
import Hero from "../components/UI/Hero/Hero";

const ResultsPage = () => {
    return ( 
        <Fragment>
            <Hero title="Results" breadCrumbItem="Results" />
            <Results />
        </Fragment>
     );
}
 
export default ResultsPage;