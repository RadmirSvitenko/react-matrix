import React, { useState } from "react";
import {
  AuthButton,
  AuthorizationForm,
  AuthorizationInput,
  AuthorizationTitle,
  RegButton,
  RegistrationForm,
  RegistrationInput,
  RegistrationTitle,
} from "./styles";
import { IconButton } from "@mui/material";
import {
  AccountCircle,
  Mail,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import theme from "theme";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { getTokenFromCookies } from "cookies";
import { setTokenFromCookies } from "cookies";
import { API_NOTEBOOKS } from "requester";

const Authorization = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();

  const { t } = useTranslation();

  // const token = getTokenFromCookies();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const authData = async (d) => {
    console.log(d);

    const response = await API_NOTEBOOKS.post("signup/", {
      username: d.username,
      password: d.password,
      password2: d.password2,
      email: d.email,
    });

    // setTokenFromCookies(response.data.token);
  };

  return (
    <RegistrationForm onSubmit={handleSubmit(authData)}>
      <RegistrationTitle>{t("regTitle")}</RegistrationTitle>

      <RegistrationInput
        {...register("username")}
        type="text"
        label={t("authLogin")}
        variant="outlined"
        required
        InputProps={{
          endAdornment: (
            <IconButton>
              <AccountCircle
                sx={{
                  color: theme.palette.colorOrange.main,
                }}
              />
            </IconButton>
          ),
        }}
        InputLabelProps={{
          style: { color: theme.palette.colorOrange.main },
        }}
      />
      <RegistrationInput
        {...register("password")}
        type={showPassword ? "text" : "password"}
        label={t("regPassword")}
        variant="outlined"
        required
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleShowPassword}>
              {showPassword ? (
                <Visibility
                  sx={{
                    color: theme.palette.colorOrange.main,
                  }}
                />
              ) : (
                <VisibilityOff
                  sx={{
                    color: theme.palette.colorOrange.main,
                  }}
                />
              )}
            </IconButton>
          ),
        }}
        InputLabelProps={{
          style: { color: theme.palette.colorOrange.main },
        }}
      />

      <RegistrationInput
        {...register("password2")}
        type={showPassword ? "text" : "password"}
        label={t("regPasswordRepeat")}
        variant="outlined"
        required
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleShowPassword}>
              {showPassword ? (
                <Visibility
                  sx={{
                    color: theme.palette.colorOrange.main,
                  }}
                />
              ) : (
                <VisibilityOff
                  sx={{
                    color: theme.palette.colorOrange.main,
                  }}
                />
              )}
            </IconButton>
          ),
        }}
        InputLabelProps={{
          style: { color: theme.palette.colorOrange.main },
        }}
      />

      <RegistrationInput
        {...register("email")}
        type="email"
        label={t("regMail")}
        variant="outlined"
        required
        InputProps={{
          endAdornment: (
            <IconButton>
              <Mail
                sx={{
                  color: theme.palette.colorOrange.main,
                }}
              />
            </IconButton>
          ),
        }}
        InputLabelProps={{
          style: { color: theme.palette.colorOrange.main },
        }}
      />

      <RegButton
        sx={{
          backgroundColor: theme.palette.colorOrange.main,
          transition: "0.5s",
          padding: "10px 40px",
          "&:hover": {
            backgroundColor: theme.palette.colorNeon.main,
            transition: "0.5s",
          },
        }}
        variant="contained"
        type="submit"
      >
        {t("buttonReg")}
      </RegButton>
    </RegistrationForm>
  );
};

export default Authorization;
