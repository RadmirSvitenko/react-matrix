import { Box, Grid, Typography } from "@mui/material";
import { styled } from "styled-components";
import PresentBg from "assets/images/present-bg.jpg";
import PresentBg2 from "assets/images/present-bg2.jpg";
import PresentBg3 from "assets/images/present-bg3.jpg";
import PresentBg4 from "assets/images/present-bg4.jpg";
import PresentBg5 from "assets/images/present-bg5.webp";

import AdPresentBg from "assets/images/ad-present-img.jpg";
import theme from "theme";

export const PresentationMainContainer = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  scrollBehavior: "smooth",
  background: theme.palette.colorWhite.main,
}));

export const PresentationOneBox = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  background: `url(${PresentBg})`,
  backgroundSize: "100% 100vh",
}));

export const PresentationTwoBox = styled(Grid)(({ theme }) => ({
  width: "100%",
  background: theme.palette.colorWhite.main,
}));

export const PresentationThreeBox = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  background: `url(${PresentBg3})`,
  backgroundSize: "100% 100vh",
}));

export const PresentationFourBox = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  background: `url(${PresentBg4})`,
  backgroundSize: "100% 150vh",
}));

export const PresentationFiveBox = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  background: `url(${PresentBg5})`,
  backgroundSize: "100% 120vh",
}));

export const SlideBoxTitleOne = styled(Box)(() => ({
  width: "100%",
  height: "30vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const TitleMatrixOne = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "46px",
  color: theme.palette.colorOrange.main,
}));

export const TitleMatrixDiscounts = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "26px",
  color: theme.palette.colorNeon.main,
}));

export const PresentationSliderBrands = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "26px",
  color: theme.palette.colorNeon.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100px",
  background: "#000",
}));
