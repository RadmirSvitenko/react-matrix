import {
  PresentationMainContainer,
  PresentationOneBox,
  PresentationSliderBrands,
  PresentationTwoBox,
  SlideBoxTitleOne,
  TitleMatrixDiscounts,
  TitleMatrixOne,
} from "./styles";

import NewProducts from "components/NewProducts/NewProducts";
import TopSales from "components/TopSales/TopSales";
import Header from "components/Header/Header";
import { useTranslation } from "react-i18next";

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
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>Acer</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>Lenovo</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>MSI</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>HP</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>Macbook</h3>
          <h3 style={{ color: "#fff", margin: "0px 50px" }}>Huawei</h3>

          {/* <img width={"150px"} height={"50px"} src={asusImg} alt="Asus" />
          <img width={"150px"} height={"50px"} src={acerImg} alt="Acer" />
          <img width={"150px"} height={"50px"} src={lenovoImg} alt="Lenovo" />
          <img width={"150px"} height={"50px"} src={macbookImg} alt="Macbook" />
          <img width={"150px"} height={"50px"} src={hpImg} alt="HP" />
          <img width={"150px"} height={"50px"} src={huaweiImg} alt="Huawei" />
          <img width={"150px"} height={"50px"} src={msiImg} alt="MSI" /> */}
        </PresentationSliderBrands>
        <Header />
        <NewProducts />
        <TopSales />
      </PresentationTwoBox>
    </PresentationMainContainer>
  );
};

export default Presentation;
