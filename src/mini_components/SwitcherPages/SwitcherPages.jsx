import { Grid, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";

const SwitcherPages = () => {
  const [currentPage, setCurrentPage] = useState();

  const handleSwitchPageCatalog = () => {
    setCurrentPage();
  };

  return (
    <Grid
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"50px 0px"}
      width={"100%"}
    >
      <Stack spacing={2}>
        <Pagination
          onChange={handleSwitchPageCatalog}
          count={17}
          page={1}
          defaultPage={1}
          color="primary"
        />
      </Stack>
    </Grid>
  );
};

export default SwitcherPages;
