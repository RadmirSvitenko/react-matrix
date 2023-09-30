import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFlip,
  Pagination,
  Navigation,
  EffectCube,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import {
  AboutProductContainer,
  AboutProductInfo,
  AboutProductInfoBox,
  AboutProductSliderBox,
  AboutProductTitle,
  AddToCart,
} from "./styles";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Add } from "@mui/icons-material";
import theme from "theme";
import { useDispatch } from "react-redux";
import {
  getProductDetails,
  postProductDetails,
} from "reducers/productDetailsSlice";
import { useNavigate } from "react-router-dom";
import { getUserCart } from "reducers/cartSlice";

const AboutProduct = ({ notebook }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleAddNotebooksToCart = async () => {
    await dispatch(postProductDetails({ notebook: notebook, id: notebook.id }));
  };

  return (
    <AboutProductContainer>
      <AboutProductSliderBox>
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          effect={"cube"}
          loop
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={notebook.images[0]} alt={notebook.title} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={notebook.images[1]} alt={notebook.title} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={notebook.images[2]} alt={notebook.title} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={notebook.images[3]} alt={notebook.title} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={notebook.images[4]} alt={notebook.title} />
          </SwiperSlide>
        </Swiper>
      </AboutProductSliderBox>
      <AboutProductInfoBox>
        <AboutProductTitle>{notebook.title}</AboutProductTitle>
        <table align="justify">
          <tr>
            <td>
              <AboutProductInfo>
                {t("productDetailsScreenResolution")}:
              </AboutProductInfo>
            </td>

            <td>
              <AboutProductInfo>{notebook.screenResolution}</AboutProductInfo>
            </td>
          </tr>

          <tr>
            <td>
              <AboutProductInfo>
                {t("productDetailsMatrixType")}:
              </AboutProductInfo>
            </td>

            <td>
              <AboutProductInfo>{notebook.screenMatrix}</AboutProductInfo>
            </td>
          </tr>

          <tr>
            <td>
              <AboutProductInfo>
                {" "}
                {t("productDetailsCPUName")}:
              </AboutProductInfo>
            </td>

            <td>
              <AboutProductInfo>{notebook.cpuName}</AboutProductInfo>
            </td>
          </tr>

          <tr>
            <td>
              <AboutProductInfo> {t("productDetailsRAM")}:</AboutProductInfo>
            </td>

            <td>
              <AboutProductInfo>{notebook.ram}</AboutProductInfo>
            </td>
          </tr>

          <tr>
            <td>
              <AboutProductInfo>
                {t("productDetailsBaseOperatinSystem")}:
              </AboutProductInfo>
            </td>

            <td>
              <AboutProductInfo>
                {notebook.baseOperatingSystem}
              </AboutProductInfo>
            </td>
          </tr>

          <tr>
            <td>
              <AboutProductInfo>
                {t("productDetailsGuarantee")}:
              </AboutProductInfo>
            </td>

            <td>
              <AboutProductInfo>{notebook.Guarantee}</AboutProductInfo>
            </td>
          </tr>

          <tr>
            <td>
              <AboutProductInfo>{t("productDetailsPrice")}:</AboutProductInfo>
            </td>

            <td>
              <AboutProductInfo
                sx={{
                  color: "lime",
                  fontWeight: "bold",
                }}
              >
                ${notebook.price}
              </AboutProductInfo>
            </td>
          </tr>

          <tr>
            <AddToCart
              onClick={handleAddNotebooksToCart}
              sx={{
                ":hover": {
                  transition: "0.5s",
                  backgroundColor: theme.palette.colorOrange.main,
                },
              }}
              variant="contained"
            >
              {t("addToCart")} <Add />
            </AddToCart>
          </tr>
        </table>
      </AboutProductInfoBox>
    </AboutProductContainer>
  );
};

export default AboutProduct;
