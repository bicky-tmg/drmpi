import { Image } from "react-bootstrap";

import classes from "./ShortTermProgramsItem.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

const ShortTermProgramsItem = (props) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={true}
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {props.shortTermPrograms.map((shortTermProgram) => (
        <SwiperSlide key={shortTermProgram.id}>
          <div className={classes["short-prog"]}>
            <div className={classes["short-prog-img"]}>
              <Image src={shortTermProgram.backgroundImageURL} fluid />
              <div className={classes["short-prog-wrap"]}>
                <div className={classes["short-prog-des"]}>
                  <h3>{shortTermProgram.headingText}</h3>
                  <p>
                    {shortTermProgram.description.length > 120
                      ? `${shortTermProgram.description.substring(0, 120)}...`
                      : shortTermProgram.description}
                  </p>
                  <Link
                    className="learn-more"
                    to={`/short-term-programs/${shortTermProgram.id}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShortTermProgramsItem;
