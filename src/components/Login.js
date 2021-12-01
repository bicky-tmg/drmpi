import React, { useCallback } from "react";
import { Container, Row, Card, Spinner } from "react-bootstrap";

import "./Login.css";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../app/services/auth";
import { setCredentials } from "../features/auth/authSlice";
import { useHistory } from "react-router";

const { Body, Title } = Card;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    rememberLogin: true,
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleClick = () => setShow(!show);
  const handleChange = ({ target: { name, value } }) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const userLogin = useCallback(async () => {
    try {
      const user = await login(formState).unwrap();
      if (user && user.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      dispatch(setCredentials(user));
      history.replace("/drmpi-admin");
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, formState, login, history]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    userLogin();
  };
  return (
    <section className="login-form">
      <Container>
        <Row className="justify-content-md-center">
          <div className="card-wrapper">
            <div className="brand">
              <img src={logo} className="login-logo" alt="DRMPI logo" />
            </div>
            <Card className="fat">
              <Body>
                <Title className="h4">Login</Title>
                <form
                  className="login-form-validation"
                  onSubmit={handleFormSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="email">E-Mail Address</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div style={{ position: "relative" }}>
                      <input
                        id="password"
                        type={show ? "text" : "password"}
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                        required
                      />
                      <div
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "9px",
                        }}
                      >
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          style={{ padding: "2px 7px", fontSize: "12px" }}
                          onClick={handleClick}
                        >
                          {show ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-checkbox custom-control">
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="remember"
                        className="custom-control-label"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>

                  <div className="form-group m-0">
                    <button className="btn btn-primary btn-block">
                      {isLoading && (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="mr-4"
                        />
                      )}
                      Login
                    </button>
                  </div>
                </form>
              </Body>
            </Card>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
