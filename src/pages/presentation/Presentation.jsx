import React from "react";
import {
  ImageFive,
  ImageFour,
  ImageOne,
  ImageSeven,
  ImageSix,
  ImageThree,
  ImageTwo,
  ImagesBox,
  PresentationMainContainer,
  PresentationOneBox,
  PresentationTwoBox,
  ShadowBox,
  SliderImage,
} from "./styles";
import SliderImgOne from "assets/images/slider-img-one.jpg";
import SliderImgTwo from "assets/images/slider-img-two.jpg";
import SliderImgThree from "assets/images/slider-img-three.jpg";
import SliderImgFour from "assets/images/slider-img-four.jpg";
import SliderImgFive from "assets/images/slider-img-five.jpg";

import PresenImgOne from "assets/images/present-img-one.jpg";
import PresenImgTwo from "assets/images/present-img-two.jpg";
import PresenImgThree from "assets/images/present-img-three.jpg";
import PresenImgFour from "assets/images/present-img-four.jpg";
import PresenImgFive from "assets/images/present-img-five.jpg";
import PresenImgSix from "assets/images/present-img-six.jpg";
import PresenImgSeven from "assets/images/present-img-seven.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  EffectCube,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { ImageList, ImageListItem } from "@mui/material";
const Presentation = () => {
  return (
    <PresentationMainContainer>
      <PresentationOneBox>
        <ImageOne src={PresenImgOne} alt="1" />
        <ImageTwo src={PresenImgTwo} alt="2" />
        <ImageThree src={PresenImgThree} alt="3" />
        <ImageFour src={PresenImgFour} alt="4" />
        <ImageFive src={PresenImgFive} alt="5" />
        <ImageSix src={PresenImgSix} alt="6" />
        <ImageSeven src={PresenImgSeven} alt="7" />
      </PresentationOneBox>

      <PresentationTwoBox>
        <Swiper
          autoplay={true}
          loop
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderImage src={SliderImgOne} alt="Slide-One" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImgTwo} alt="Slide-Two" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImgThree} alt="Slide-Three" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImgFour} alt="Slide-Four" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImgFive} alt="Slide-Five" />
          </SwiperSlide>
        </Swiper>
      </PresentationTwoBox>
    </PresentationMainContainer>
  );
};

export default Presentation;
