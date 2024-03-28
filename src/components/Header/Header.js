import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import FunctionContext from "../../ThemeContext/FunctionTheme";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo" style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            color: "#01939c",
            fontSize: "26px",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginLeft: "20px",
          }}
        >
          React App
        </span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line1 ${isOpen ? "toggle" : ""}`}></div>
        <div className={`line2 ${isOpen ? "toggle" : ""}`}></div>
        <div className={`line3 ${isOpen ? "toggle" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="" onClick={() => navigate("/")}>
            Home1
          </a>
        </li>
        <li>
          <a href="" onClick={() => navigate("/home2")}>
            Home2
          </a>
        </li>
        <li>
          <a href="" onClick={() => navigate("/home3")}>
            Home3
          </a>
        </li>
        <li>
          <a href="" onClick={() => navigate("/home4")}>
            Home4
          </a>
        </li>
        <li>
          <a href="" onClick={() => navigate("/home5")}>
            Home5
          </a>
        </li>
        <li>
          <button
            className="login-button"
            href=""
            onClick={() => navigate("/sign-in")}
          >
            Login
          </button>
        </li>
        {/* <li> */}
        <FunctionContext></FunctionContext>
        <LanguageSwitcher></LanguageSwitcher>
        {/* </li> */}
      </ul>
    </nav>
  );
};

export default Header;
