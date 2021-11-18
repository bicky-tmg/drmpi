import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";

import useInput from "../../hooks/use-input";

import "./ContactForm.css";

const validMailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.match(validMailRegex);

const ContactForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: textAreaValue,
    isValid: textAreaIsValid,
    hasError: textAreaHasError,
    valueChangeHandler: textAreaChangeHandler,
    inputBlurHandler: textAreaBlurHandler,
    reset: resetTextArea,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (enteredNameIsValid && emailIsValid && textAreaIsValid) {
    formIsValid = true;
  }

  const formSumbitHanlder = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddEnquiry({
      name: enteredName,
      email: emailValue,
      message: textAreaValue,
    });

    resetNameInput();
    resetEmail();
    resetTextArea();
  };

  const nameInputClasses = nameInputHasError
    ? "form-group invalid"
    : "form-group";

  const emailClasses = emailHasError ? "form-group invalid" : "form-group";
  const textAreaClasses = textAreaHasError
    ? "form-group invalid"
    : "form-group";

  return (
    <form onSubmit={formSumbitHanlder}>
      {props.isLoading && (
        <div className="loading">
          <LoadingSpinner />
        </div>
      )}
      <Row>
        <Col sm={6}>
          <div className={nameInputClasses}>
            <input
              type="text"
              className="form-control"
              value={enteredName}
              placeholder="Your Name"
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <p className="error-text">Name must not be empty.</p>
            )}
          </div>
        </Col>
        <Col sm={6}>
          <div className={emailClasses}>
            <input
              type="email"
              className="form-control"
              value={emailValue}
              placeholder="E-mail"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>
        </Col>
        <Col>
          <div className={textAreaClasses}>
            <textarea
              className="form-control max-box"
              rows="3"
              placeholder="Message"
              value={textAreaValue}
              onChange={textAreaChangeHandler}
              onBlur={textAreaBlurHandler}
            ></textarea>
            {textAreaHasError && (
              <p className="error-text">Message must not be empty.</p>
            )}
          </div>
          <div className="main-btn">
            <button disabled={!formIsValid}>
              Sumbit
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="text-white ml-2"
              />
            </button>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
