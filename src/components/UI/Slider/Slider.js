import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";

import SlideItem from "./SlideItem";

import "swiper/components/effect-fade/effect-fade.min.css";

import classes from "./Slider.module.css";
import useHttp from "../../../hooks/use-http";
import { getMainContentUI } from "../../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../Spinner/LoadingSpinner";

SwiperCore.use([Autoplay, EffectFade, Pagination]);

const Slider = () => {
  const {
    sendRequest,
    status,
    data: slideItems,
    error,
  } = useHttp(getMainContentUI, true);

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

  if (status === "completed" && (!slideItems || slideItems.length === 0)) {
    return null;
  }

  const slideItem = slideItems.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <SlideItem
          title={item.headingText}
          text={item.description}
          image={item.backgroundImageURL}
        />
      </SwiperSlide>
    );
  });
  return (
    <section className={classes.Slider}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        pagination={{ clickable: true }}
      >
        {slideItem}
      </Swiper>
    </section>
  );
};

export default Slider;
