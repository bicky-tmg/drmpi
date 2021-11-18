import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/UI/Hero/Hero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import useHttp from "../hooks/use-http";
import { addEnquiry } from "../lib/api";

const Contact = () => {
  const { sendRequest, status } = useHttp(addEnquiry);

  const addEnquiryHandler = (enquiryData) => {
    sendRequest(enquiryData);
  };
  return (
    <Fragment>
      <Hero title="contact us" breadCrumbItem="Contact" />
      <section className="mb-5">
        <Container>
          <Row>
            <Col md={4} xs={12}>
              <ContactInfo />
            </Col>
            <Col md={8} xs={12}>
              <div className="contact-title">
                <h3>Get in Touch</h3>
              </div>
              <ContactForm
                isLoading={status === "pending"}
                onAddEnquiry={addEnquiryHandler}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <div style={{ height: "450px" }}>
        <iframe
          title="DRMPI Map Loation"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7060.484041791182!2d85.725557!3d27.771516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7f984aaad996e49!2z4KSa4KWM4KSk4KS-4KSw4KS-IOCkrOCkueClgeCkruClgeCkluClgCDgpJXgpY3gpK_gpL7gpK7gpY3gpKrgpLg!5e0!3m2!1sen!2sus!4v1633671363226!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{
            border: 0,
            marginBottom: 0,
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Contact;
