import { Fragment } from "react";
import Downloads from "../components/Downloads/Downloads";
import Hero from "../components/UI/Hero/Hero";

const DownloadsPage = () => {
    return ( 
        <Fragment>
            <Hero title="Downloads" breadCrumbItem="Downloads" />
            <Downloads />
        </Fragment>
     );
}
 
export default DownloadsPage;