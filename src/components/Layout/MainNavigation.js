import { Link, NavLink } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import Logo from "../../assets/images/logo.png";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  return (
    <header>
      <div className="top-nav">
        <Container>
          <Row>
            <Col md={6} sm={8}>
              <ul className="list-inline top-left">
                <li>
                  <a href="tel:011620323">
                    <span className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    011-620323
                  </a>
                </li>
                <li>
                  <a href="mailto:drmpi.sindhu@gmail.com">
                    <span className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    drmpi.sindhu@gmail.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <section className={classes.navigation}>
        <Navbar collapseOnSelect expand="md" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img className={classes.logo} src={Logo} alt="DRMPI logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.btnToggle} style={{padding: 0, border: 0}} />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink to="/" className={`nav-link ${classes.Link}`} activeClassName={classes.active} exact>
                  Home
                </NavLink>
                <NavLink to="/notice" className={`nav-link ${classes.Link}`} activeClassName={classes.active}>Notice</NavLink>
                <NavLink to="/results" className={`nav-link ${classes.Link}`} activeClassName={classes.active}>Results</NavLink>
                <NavLink to="/vacancy" className={`nav-link ${classes.Link}`} activeClassName={classes.active}>Vacancy</NavLink>
                <NavLink to="/scholarship" className={`nav-link ${classes.Link}`} activeClassName={classes.active}>Scholarship</NavLink>
                <NavLink to="/contact" className={`nav-link ${classes.Link}`} activeClassName={classes.active}>Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </header>
  );
};

export default MainNavigation;
