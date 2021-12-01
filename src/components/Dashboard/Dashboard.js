import Sidebar from "./Sidebar";

import "./Dashboard.css";

const Dashboard = (props) => {
    return ( 
        <div className="dashboard">
            <Sidebar />
            <main>{props.children}</main>
        </div>
     );
}
 
export default Dashboard;