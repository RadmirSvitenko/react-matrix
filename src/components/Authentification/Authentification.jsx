import React, { useState } from "react";
import {
  AuthButton,
  AuthentificationContainer,
  AuthentificationTab,
  AuthentificationTabs,
  AuthorizationForm,
  AuthorizationInput,
  AuthorizationTitle,
  RegButton,
  RegistrationForm,
  RegistrationInput,
  RegistrationTab,
  RegistrationTabs,
  RegistrationTitle,
} from "./styles";
import theme from "theme";
import { Box, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Authorization from "./Authorization/Authorization";
import { t } from "i18next";
import Registration from "./Registration/Registration";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const { t } = useTranslation();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: "20px" }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

const Authentification = () => {
  const [value, setValue] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const authHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AuthentificationContainer>
      <AuthentificationTabs
        value={value}
        centered
        onChange={authHandleChange}
        textColor={"theme.palette.colorOrange.main"}
      >
        <AuthentificationTab
          sx={{
            fontFamily: theme.fonts.valeraRound,
            letterSpacing: "2px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          label={t("authTitle")}
          {...a11yProps(0)}
        />
        <AuthentificationTab
          sx={{
            fontFamily: theme.fonts.valeraRound,
            letterSpacing: "2px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          label={t("regTitle")}
          {...a11yProps(1)}
        />
      </AuthentificationTabs>

      <CustomTabPanel value={value} index={0}>
        <Authorization />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Registration />
      </CustomTabPanel>
    </AuthentificationContainer>
  );
};

export default Authentification;
