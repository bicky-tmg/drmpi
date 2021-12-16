import { Link } from "react-router-dom";
import "./PageTitle.css";

const PageTitle = ({pageName}) => {
  return (
    <div className="page-title-box">
      <div className="page-title-right">
        <ol className="breadcrumb m-0">
          <li className="breadcrumb-item">
            <Link to="/drmpi-admin">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">{pageName}</li>
        </ol>
      </div>
      <h4 className="page-title">{pageName}</h4>
    </div>
  );
};

export default PageTitle;
