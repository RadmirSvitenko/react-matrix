import { Box, Grid } from "@mui/material";
import React, { useMemo } from "react";
import theme from "theme";
import InterestingReviews from "titles/InterestingReviews";
import { OverviewContainer } from "./styles";

const OverviewPresentation = () => {
  return (
    <OverviewContainer>
      <InterestingReviews />
      <Box
        width={"70%"}
        height={"500px"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "280px",
            height: "280px",
          },
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/EfDUv6MCfWQ?si=dLQKA1kA5Pl6Xbjq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </Box>

      <Box
        width={"70%"}
        height={"500px"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "280px",
            height: "280px",
          },
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/128u21Fn0TY?si=EA3zp9_RbJPr8v-F"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </Box>

      <Box
        width={"70%"}
        height={"500px"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "280px",
            height: "280px",
          },
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ICh-VDhncys?si=Gxykg4GCSV3ZF0D_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </Box>
    </OverviewContainer>
  );
};

export default OverviewPresentation;
