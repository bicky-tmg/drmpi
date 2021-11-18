import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faLandmark,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={classes.FooterInfo}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className={classes.FooterBox}>
                <div className={classes.FooterBoxWrap}>
                  <NavLink to="/" exact>
                    <img
                      className={`${classes.Logo}`}
                      src={Logo}
                      alt="DRMI footer logo"
                    />
                  </NavLink>
                  <ul className={classes.ContactList}>
                    <li className={classes.ContactItem}>
                      <a href="tel:011620323">
                        <span className={classes.Icon}>
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        011-620323
                      </a>
                    </li>
                    <li className={classes.ContactItem}>
                      <a href="mailto:drmpi.sindhu@gmail.com">
                        <span className={classes.Icon}>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        drmpi.sindhu@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className={classes.QuickLink}>
                <div className={classes.QuickLinkWrap}>
                  <h3>Quick Link</h3>
                  <ul>
                    <li>
                      <NavLink to="/" exact>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/results">Results</NavLink>
                    </li>
                    <li>
                      <NavLink to="/downloads">Downloads</NavLink>
                    </li>
                    <li>
                      <NavLink to="/scholarship">Scholarship</NavLink>
                    </li>
                    <li>
                      <a
                        href="http://www.ctevt.org.np/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CTEVT
                      </a>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className={classes.ContactBox}>
                <div className={classes.ContactBoxWrap}>
                  <h3>Contact Us</h3>
                  <ul className={classes.ContactBoxList}>
                    <li className={classes.ContactBoxItem}>
                      <span>
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                      Sunday - Friday (10:00 AM - 5:00 PM)
                    </li>
                    <li className={classes.ContactBoxItem}>
                      <a href="tel:011620323">
                        <span>
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        011-620323
                      </a>
                    </li>
                    <li className={classes.ContactBoxItem}>
                      <a href="mailto:drmpi.sindhu@gmail.com">
                        <span>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        drmpi.sindhu@gmail.com
                      </a>
                    </li>
                    <li className={classes.ContactBoxItem}>
                      <span>
                        <FontAwesomeIcon icon={faLandmark} />
                      </span>
                      Chautara Sangachowkgadi-5, Sindhupalchowk, Nepal
                    </li>
                    <li
                      className={`${classes.ContactBoxItem} ${classes.Media}`}
                    >
                      <a
                        href="https://www.facebook.com/Dinesh-Ramji-Memorial-Polytechnic-Institute-111343667306194/"
                        rel="noreferrer"
                        target="_blank"
                        className={classes.MediaLink}
                      >
                        <span className={classes.MediaIcon}>
                          <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                        <span className={classes.MediaName}>Facebook</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={classes.FooterCopyRight}>
        <Container>
          <Row>
            <Col xs={12}>
              <p className="text-center my-2 text-capitalize">
                &copy; DRMPI. All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
