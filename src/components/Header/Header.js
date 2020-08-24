import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_wrapper">
        <img className="Logo" src="/src/assets/images/logo.svg" alt="Logo" />
        <h3>Score: 0</h3>
      </div>
      <ul className="Rounds">
        <li>Разминка</li>
        <li>Воробьиные</li>
        <li>Лесные птицы</li>
        <li>Певчие птицы</li>
        <li>Хищные птицы</li>
        <li>Морские птицы</li>
      </ul>
    </div>
  );
};

export default Header;
