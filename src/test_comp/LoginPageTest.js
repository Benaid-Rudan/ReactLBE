import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginTest.css";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
const Login = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onButtonClick = () => {
    // You'll update this function later...
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const OnSubmit = async (e) => {
    console.log("Logn");
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <div className="mainContainer">
        <LanguageSwitcher></LanguageSwitcher>
        <div className="titleContainer">
          <div>{t("Login")}</div>
        </div>
        <br />
        <div className="inputContainer">
          <input
            placeholder={t("EnterEmail") || ""}
            className="inputBox"
            {...register("email", { required: "This text is required" })}
          />

          {errors.email && (
            <label className="errorLabel">{errors.email.message}</label>
          )}
        </div>
        <br />
        <div className="inputContainer">
          <input
            placeholder={t("EnterPassword") || ""}
            className="inputBox"
            {...register("password", { required: "This text is required" })}
          />

          {errors.password && (
            <label className="errorLabel">{errors.password.message}</label>
          )}
        </div>
        <br />
        <div className="inputContainer">
          <button type="submit" className="btn btn-primary">
            {t("Login")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
