import { CircularProgress, Grid } from "@mui/material";
import theme from "theme";

const LoadingPage = () => {
  return (
    <Grid
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
    >
      <CircularProgress
        sx={{
          color: theme.palette.colorViolet.main,
        }}
        size={"100px"}
      />
    </Grid>
  );
};

export default LoadingPage;
