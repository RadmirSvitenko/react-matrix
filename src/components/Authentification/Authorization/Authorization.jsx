import React, { useEffect, useState } from "react";
import {
  AuthButton,
  AuthorizationForm,
  AuthorizationInput,
  AuthorizationTitle,
  RegistrationInput,
} from "./styles";
import { IconButton } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import theme from "theme";
import { useTranslation } from "react-i18next";
import { appendErrors, useForm } from "react-hook-form";
import { API_NOTEBOOKS } from "requester";
import { setTokenFromCookies } from "cookies";
import { ErrorMessage } from "@hookform/error-message";
import { getTokenFromCookies } from "cookies";
import Catalog from "pages/catalog/Catalog";
import { Navigate, useNavigate } from "react-router-dom";

const Authorization = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const authData = async (d) => {
    console.log("d", d);
    const response = await API_NOTEBOOKS.post("login/", {
      password: d.password,
      username: d.username,
    });

    await setTokenFromCookies(response.data.token);
    await tokenTesting();
  };

  const tokenTesting = async () => {
    const token = getTokenFromCookies();
    console.log("token: ", token);
    if (token) {
      navigate("/catalog");
      console.log("Работает");
    }
  };

  return (
    <AuthorizationForm onSubmit={handleSubmit(authData)}>
      <AuthorizationTitle>{t("authTitle")}</AuthorizationTitle>
      <AuthorizationInput
        {...register("username")}
        type="text"
        label={t("authLogin")}
        variant="outlined"
        sx={{
          color: "#fff",
        }}
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
      <AuthorizationInput
        {...register("password")}
        type={showPassword ? "text" : "password"}
        label={t("authPassword")}
        variant="outlined"
        required
        sx={{}}
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

      <AuthButton
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
        // href={token ? "/catalog" : "/catalog"}
        // onClick={() => tokenTesting()}
      >
        {t("buttonAuth")}
      </AuthButton>
    </AuthorizationForm>
  );
};

export default Authorization;
