import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <Fragment>
      <div className="contact-title">
        <h3>Contact Info</h3>
      </div>
      <ul className="contact-item">
        <li className="clearfix">
          <div className="cnt-icon">
            <span className="mark">
              <FontAwesomeIcon icon={faMapMarker} />
            </span>
          </div>
          <div className="icon-info">
            {/* <h4>Our Location</h4> */}
            <h5>Chautara Sangachowkgadi-5, Sindhupalchowk, Nepal</h5>
          </div>
        </li>
        <li className="clearfix">
          <div className="cnt-icon">
            <span className="env">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="icon-info">
            {/* <h4>Our Mail</h4> */}
            <h5>
              <a href="mailto:drmpi.sindhu@gmail.com">drmpi.sindhu@gmail.com</a>
            </h5>
          </div>
        </li>
        <li className="clearfix">
          <div className="cnt-icon">
            <span className="phn">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          <div className="icon-info">
            {/* <h4>Our Contact No.</h4> */}
            <h5>
              <a href="tel:011620323">011-620323</a>
            </h5>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default ContactInfo;
