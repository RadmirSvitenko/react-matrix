import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserCart, postDeleteProductModalcart } from "reducers/cartSlice";
import { postProductDetails } from "reducers/productDetailsSlice";
import {
  CartDetailsAllProducts,
  CartDetailsCountProducts,
  CartDetailsProductContainer,
  CartDetailsSlideBox,
} from "./styles";

import theme from "theme";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, HashNavigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Box, Grid, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import {
  CharacteristicsDescriptionTitle,
  CharacteristicsInfo,
  CharacteristicsTitle,
} from "pages/productDetails/characteristics/styles";
import TableDetailsProduct from "components/TableDetailsProduct/TableDetailsProduct";
import HeaderCatalog from "components/HeaderCatalog/HeaderCatalog";

const CartDetails = () => {
  const [cart, setCart] = useState([]);
  console.log("cart: ", cart);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getDataCart = useCallback(async () => {
    const cartData = await dispatch(getUserCart());
    setCart(cartData.payload);
  }, [dispatch]);

  const handleDeleteProductModalcart = async (id, notebook) => {
    await dispatch(
      postDeleteProductModalcart({
        id: id,
        notebook: notebook,
      })
    );
  };

  const handleAddProductModalcart = async (id, notebook) => {
    await dispatch(
      postProductDetails({
        id: id,
        notebook: notebook,
      })
    );
  };

  useEffect(() => {
    getDataCart();
  }, [getDataCart]);

  return (
    <CartDetailsProductContainer>
      <HeaderCatalog />

      {cart.map(({ notebook }) => (
        <CartDetailsAllProducts>
          <CartDetailsSlideBox>
            <Swiper
              spaceBetween={30}
              hashNavigation={{
                watchState: true,
              }}
              loop
              navigation={true}
              modules={[Pagination, Navigation, HashNavigation]}
              className="mySwiper"
            >
              <SwiperSlide data-hash="slide1">
                <img
                  src={notebook.images[0]}
                  alt={notebook.title}
                  width={"400px"}
                  height={"400px"}
                />
              </SwiperSlide>
              <SwiperSlide data-hash="slide1">
                <img
                  src={notebook.images[1]}
                  alt={notebook.title}
                  width={"400px"}
                  height={"400px"}
                />
              </SwiperSlide>
              <SwiperSlide data-hash="slide1">
                <img
                  src={notebook.images[2]}
                  alt={notebook.title}
                  width={"400px"}
                  height={"400px"}
                />
              </SwiperSlide>
              <SwiperSlide data-hash="slide1">
                <img
                  src={notebook.images[3]}
                  alt={notebook.title}
                  width={"400px"}
                  height={"400px"}
                />
              </SwiperSlide>
              <SwiperSlide data-hash="slide1">
                <img
                  src={notebook.images[4]}
                  alt={notebook.title}
                  width={"400px"}
                  height={"400px"}
                />
              </SwiperSlide>
            </Swiper>
          </CartDetailsSlideBox>
          <TableDetailsProduct notebook={notebook} />
        </CartDetailsAllProducts>
      ))}
      <CartDetailsCountProducts>dasdasdasdasdsa</CartDetailsCountProducts>
    </CartDetailsProductContainer>
  );
};

export default CartDetails;
