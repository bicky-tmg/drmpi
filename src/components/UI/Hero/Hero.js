import { Link, useRouteMatch } from "react-router-dom";

const Hero = (props) => {
  const match = useRouteMatch();
  return (
    <div className="inner-image">
      <div className="inner-img-title">
        <h1 className="text-uppercase">{props.title}</h1>
      </div>
      <ul className="breadcrumb justify-content-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={match.url} style={{ color: "#ffffff80" }}>
            {props.breadCrumbItem}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
