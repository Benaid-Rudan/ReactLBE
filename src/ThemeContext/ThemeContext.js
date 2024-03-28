import React, { useContext, useState, useEffect, createContext } from "react";

const ThemeContext = createContext(false);
const ThemeUpdateContext = createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children, ...props }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const isDark = storedTheme === "dark";
  const [darkTheme, setDarkTheme] = useState(isDark);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
    document.body.classList.toggle("dark", darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    const newTheme = !darkTheme ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
