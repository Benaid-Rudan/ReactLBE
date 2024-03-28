import React, { useState, useEffect } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
import styles from "./FunctionTheme.css";
import { useTranslation } from "react-i18next";
import LightThemeSVG from "../components/Buttons/LightThemeSVG";
import DarkThemeSVG from "../components/Buttons/DarkThemeSVG";

const FunctionContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const toggleTheme = useThemeUpdate();
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light"
    );
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  return (
    <button className={styles.button} onClick={handleThemeToggle}>
      {isDarkMode ? <LightThemeSVG /> : <DarkThemeSVG />}
      <span className={styles.label}>
        {isDarkMode ? t("Light Theme") : t("Dark Theme")}
      </span>
    </button>
  );
};

export default FunctionContext;
