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
  justifyContent: "center",
  paddingRight: "50px",
  alignItems: "center",
  background: `url(${authBackground})`,
  backgroundSize: "100% 100vh",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    paddingRight: "0px",
  },
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    textAlign: "center",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
    textAlign: "center",
  },
}));

export const TitleMatrixDiscounts = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "26px",
  color: theme.palette.colorNeon.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: "18xpx",
    textAlign: "center",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    textAlign: "center",
  },
}));

export const PresentationSliderBrands = styled(Box)(({ theme }) => ({
  fontFamily: theme.fonts.oswald,
  letterSpacing: "2px",
  fontSize: "20px",
  color: theme.palette.colorNeon.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100px",
  background: "#000",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "auto",
    fontSize: "18px",
  },
}));
