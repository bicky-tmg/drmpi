import { Container, Row, Col, Image } from "react-bootstrap";

import SectionTitle from "../UI/SectionTitle";

import classes from "./Message.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import useHttp from "../../hooks/use-http";
import { getWelcomeMsg } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/Spinner/LoadingSpinner";

SwiperCore.use([Autoplay]);

const Message = () => {
  const {
    sendRequest,
    status,
    data: loadedWelcomeMsg,
    error,
  } = useHttp(getWelcomeMsg, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="text-center my-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (
    status === "completed" &&
    (!loadedWelcomeMsg || loadedWelcomeMsg.length === 0)
  ) {
    return null;
  }
  return (
    <section className={classes.message}>
      <SectionTitle title="Welcome Message" />
      <Container fluid className={classes["bg-img"]}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {loadedWelcomeMsg.map((msgItem) => (
            <SwiperSlide key={msgItem.id}>
              <Container>
                <Row>
                  <Col xs={12} sm={4}>
                    <div className={classes.img}>
                      <Image src={msgItem.backgroundImageURL} fluid />
                      <div></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={8}>
                    <div className={`mt-4 mt-sm-0 ${classes.text}`}>
                      <h2>{msgItem.heading}</h2>
                      <p className="mb-0">{msgItem.message}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Message;
