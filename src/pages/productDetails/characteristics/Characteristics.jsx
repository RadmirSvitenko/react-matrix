import { useTranslation } from "react-i18next";
import {
  CharacteristicsContainer,
  CharacteristicsInfo,
  CharacteristicsInfoBox,
  CharacteristicsTitle,
} from "./styles";

const Characteristics = ({ notebook }) => {
  const { t } = useTranslation();
  return (
    <CharacteristicsContainer>
      <CharacteristicsInfoBox>
        <table>
          <tr>
            <td colSpan={2}>
              <CharacteristicsTitle>{notebook.title}</CharacteristicsTitle>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>{t("productDetailsID")}</CharacteristicsInfo>
            </td>

            <td>
              <CharacteristicsInfo>{notebook.id}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsStock")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.stock}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsBrand")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.brand}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsModel")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.model}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsDiagonal")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.diagonal}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsUpdateFrequency")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.updateFrequency}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsScreenResolution")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.screenResolution}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsScreenMatrix")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.screenMatrix}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsScreenBrightness")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.screenBrightness}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsScreenSurface")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.screenSurface}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsMatrixType")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.matrixType}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsAspectRatio")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.aspectRatio}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsNTSCColorGamut")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.ntscColorGamut}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsRAM")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.ram}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsBaseOperatinSystem")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.baseOperatingSystem}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsCPUType")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.cpuType}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsCPUName")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.cpuName}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsCPUCore")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.cpuCore}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsCPUFrequency")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.cpuFrequency}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsNumberOfCoresProcessor")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.numberOfCoresProcessor}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsMaximumNumberOfThreads")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.maximumNumberOfThreads}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsWiFiVersion")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.wifiVersion}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsBluetoothVersion")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.bluetoothVersion}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsUSBVersionTwoZero")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.usbVersionTwoZero}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsUSBVersionThreeZero")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.usbVersionThreeZero}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsWebCam")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.webCam}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsMicrophone")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.microphone}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsGuarantee")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.Guarantee}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsEnergyIntensityBatteries")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.energyIntensityBatteries}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsMaterialCorps")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.materialCorps}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsColorCorps")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.colorsCorps}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsShockproofCorps")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.shockproofCorps}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsItemWeight")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.itemWeight}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsVolumeDisk")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>{notebook.volumeDisk}</CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsDiskConfiguration")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.diskConfiguration}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsKeyboardLanguage")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo>
                {notebook.keyboardLanguage}
              </CharacteristicsInfo>
            </td>
          </tr>

          <tr>
            <td>
              <CharacteristicsInfo>
                {t("productDetailsPrice")}
              </CharacteristicsInfo>
            </td>
            <td>
              <CharacteristicsInfo
                sx={{
                  color: "lime",
                  fontWeight: "800",
                }}
              >
                ${notebook.price}
              </CharacteristicsInfo>
            </td>
          </tr>
        </table>
      </CharacteristicsInfoBox>
    </CharacteristicsContainer>
  );
};

export default Characteristics;
