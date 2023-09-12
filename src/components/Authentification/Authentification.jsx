import React, { useState } from "react";
import {
  AuthButton,
  AuthentificationContainer,
  AuthentificationTab,
  AuthentificationTabs,
  AuthorizationForm,
  AuthorizationInput,
  AuthorizationTitle,
  RegistrationInput,
} from "./styles";
import { Button, IconButton, TextField, alpha, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Authentification = () => {
  const [value, setValue] = useState("one");
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();

  const { t } = useTranslation();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const authData = (d) => {
    console.log(d);
  };

  const authHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AuthentificationContainer>
      <AuthorizationForm onSubmit={handleSubmit(authData)}>
        <AuthentificationTabs
          value={value}
          onChange={authHandleChange}
          textColor={"theme.palette.colorOrange.main"}
          indicatorColor={"theme.palette.colorOrange.main"}
        >
          <AuthentificationTab
            label={t("authTitle")}
            value="authorization"
            color={"theme.palette.colorOrange.main"}
          />
          <AuthentificationTab label={t("regTitle")} value="registration" />
        </AuthentificationTabs>

        <AuthorizationTitle>{t("authTitle")}</AuthorizationTitle>
        <AuthorizationInput
          color="primary"
          {...register("userName")}
          type="text"
          label={t("authLogin")}
          variant="outlined"
          required
          InputProps={{
            endAdornment: (
              <IconButton>
                <AccountCircle />
              </IconButton>
            ),
          }}
        />
        <RegistrationInput
          {...register("password")}
          type={showPassword ? "text" : "password"}
          label={t("authPassword")}
          variant="outlined"
          onClick={handleShowPassword}
          required
          sx={{}}
          InputProps={{
            endAdornment: (
              <IconButton>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />

        <Button variant="contained" type="submit" color="primary">
          {t("buttonLogin")}
        </Button>
      </AuthorizationForm>
    </AuthentificationContainer>
  );
};

export default Authentification;

// <TextField
//             value={search}
//             onChange={handleSearchChange}
//             color={"secondary"}
//             sx={{
//               position: "absolute",
//               transform: "translate(-50%, -50%)",
//               left: "45%",
//               top: "50%",
//               backgroundColor: alpha(theme.palette.common.white, 0.15),
//               borderColor: "1px solid primary",
//               "& .MuiInputBase-root": {
//                 color: "secondary.main",
//                 "&:hover": {
//                   backgroundColor: alpha(theme.palette.common.white, 0.2),
//                   transition: "0.8s",
//                 },
//               },
//             }}
//             id="outlined-basic"
//             label="Поиск по каталогу"
//             variant="outlined"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment>
//                   <IconButton type="submit">
//                     <Search color="secondary" />
//                   </IconButton>
//                   <IconButton type="button" onClick={handleClearChange}>
//                     <Clear color="secondary" />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//               color: "secondary",
//               style: {
//                 border: "1px solid orange",
//               },
//             }}
//           />
