import { Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import classes from "./SingleNotice.module.css";
import { useState } from "react";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const SingleNotice = (props) => {
  const date = new Date(props.date);
  const formatedDate = date.toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  let files, lightbox;

  if (props.noticeFiles.length === 1) {
    files = (
      <div className={classes.CourseImg} onClick={() => setIsOpen(true)}>
        {props.noticeFiles.map((file) => (
          <Image key={file.noticeId} src={file.fileUrl} />
        ))}
      </div>
    );
    lightbox = isOpen && (
      <Lightbox
        mainSrc={props.noticeFiles[photoIndex].fileUrl}
        onCloseRequest={() => setIsOpen(false)}
      />
    );
  }

  if (props.noticeFiles.length > 1) {
    files = (
      <Swiper speed={500} navigation={true}>
        {props.noticeFiles.map((file) => (
          <SwiperSlide key={file.fileId}>
            <div className={classes.CourseImg} onClick={() => setIsOpen(true)}>
              <Image src={file.fileUrl} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
    lightbox = isOpen && (
      <Lightbox
        mainSrc={props.noticeFiles[photoIndex].fileUrl}
        nextSrc={
          props.noticeFiles[(photoIndex + 1) % props.noticeFiles.length].fileUrl
        }
        prevSrc={
          props.noticeFiles[
            (photoIndex + props.noticeFiles.length - 1) %
              props.noticeFiles.length
          ].fileUrl
        }
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => {
          setPhotoIndex(
            (photoIndex + props.noticeFiles.length - 1) %
              props.noticeFiles.length
          );
        }}
        onMoveNextRequest={() => {
          setPhotoIndex((photoIndex + 1) % props.noticeFiles.length);
        }}
      />
    );
  }
  return (
    <section className={classes.Notice}>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            {files}
            {lightbox}
            <div className={classes.NoticeContent}>
              <div className={classes.NoticeInfo}>
                <h5>{formatedDate}</h5>
                <h5>{props.location}</h5>
              </div>
              <h2>{props.title}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleNotice;
