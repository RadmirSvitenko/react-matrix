import {
  FilterBlocksContainer,
  FilterBox,
  FilterCard,
  FilterCardBox,
  FilterCardContent,
  FilterCardContentTitle,
  FilterCardMedia,
  FilterCardOne,
} from "./styles";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import filterBlockOne from "assets/images/filterBlock1.jpg";
import filterBlockTwo from "assets/images/filterBlock2.jpg";
import filterBlockThree from "assets/images/filterBlock3.jpg";
import { useTranslation } from "react-i18next";
import TitleOurOffer from "titles/TitleOurOffer";

const FilterBlocksPresentation = () => {
  const { t } = useTranslation();
  return (
    <FilterBlocksContainer>
      <TitleOurOffer />
      <FilterBox>
        <FilterCardBox>
          <FilterCardMedia
            component="img"
            image={filterBlockOne}
            alt="filterBlockOne"
          />
          <FilterCardContent>
            <FilterCardContentTitle>
              {t("filterGameTitle")}
            </FilterCardContentTitle>
          </FilterCardContent>
        </FilterCardBox>

        <FilterCardBox>
          <FilterCardMedia
            component="img"
            image={filterBlockTwo}
            alt="filterBlockOne"
          />
          <FilterCardContent>
            <FilterCardContentTitle>
              {t("filterWorkTitle")}
            </FilterCardContentTitle>
          </FilterCardContent>
        </FilterCardBox>

        <FilterCardBox>
          <FilterCardMedia
            component="img"
            image={filterBlockThree}
            alt="filterBlockOne"
          />
          <FilterCardContent>
            <FilterCardContentTitle>
              {t("filterBuisnessTitle")}
            </FilterCardContentTitle>
          </FilterCardContent>
        </FilterCardBox>
      </FilterBox>
    </FilterBlocksContainer>
  );
};

export default FilterBlocksPresentation;
