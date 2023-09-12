import { Box, Grid } from "@mui/material";
import { styled } from "styled-components";
import PresentBg from "assets/images/present-bg.jpg";
import authBackground from "assets/images/auth-bg.jpg";

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

export const PresentationThreeBox = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "50px",
  alignItems: "center",
  background: `url(${authBackground})`,
  backgroundSize: "100% 100vh",
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
