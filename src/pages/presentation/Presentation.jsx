import {
  PresentationMainContainer,
  PresentationOneBox,
  PresentationSliderBrands,
  PresentationThreeBox,
  PresentationTwoBox,
  SlideBoxTitleOne,
  TitleMatrixDiscounts,
  TitleMatrixOne,
} from "./styles";

import NewProducts from "components/NewProducts/NewProducts";
import TopSales from "components/TopSales/TopSales";
import Header from "components/Header/Header";
import { useTranslation } from "react-i18next";
import FilterBlocksPresentation from "components/FilterBlocksPresentation/FilterBlocksPresentation";
import OverviewPresentation from "components/OverviewPresentation/OverviewPresentation";
import Authentification from "components/Authentification/Authentification";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <PresentationMainContainer container>
      <PresentationOneBox>
        <SlideBoxTitleOne>
          <TitleMatrixOne>{t("matrixTitle")}</TitleMatrixOne>
          <TitleMatrixDiscounts>{t("matrixSubtitle")}</TitleMatrixDiscounts>
        </SlideBoxTitleOne>
      </PresentationOneBox>

      <PresentationTwoBox>
        <PresentationSliderBrands>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>ASUS</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>ACER</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>LENOVO</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>MSI</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>HP</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>MACBOOK</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>HUAWEI</h3>
        </PresentationSliderBrands>

        <Header />
        <NewProducts />
        <TopSales />
        <FilterBlocksPresentation />
        <OverviewPresentation />
      </PresentationTwoBox>

      <PresentationThreeBox>
        <Authentification />
      </PresentationThreeBox>
    </PresentationMainContainer>
  );
};

export default Presentation;
