import { useTranslation } from "react-i18next";
import {
  CharacteristicsContainer,
  CharacteristicsDescriptionTitle,
  CharacteristicsInfo,
  CharacteristicsInfoBox,
  CharacteristicsTitle,
  CustomTD,
  MoveToPayment,
} from "./styles";
import TableDetailsProduct from "components/TableDetailsProduct/TableDetailsProduct";

const Characteristics = ({ notebook }) => {
  const { t } = useTranslation();
  return <TableDetailsProduct notebook={notebook} />;
};

export default Characteristics;
