import React from "react";
import "./Header.scss";

const nameRounds = [
  "Разминка",
  "Воробьиные",
  "Лесные птицы",
  "Певчие птицы",
  "Хищные птицы",
  "Морские птицы",
];

const Header = (props) => {
  const listRounds = nameRounds.map((nameRound, index) => {
    let className = "";
    if (index === props.currentQuestionIndex) {
      className = "active";
    }
    return (
      <li key={index} className={className}>
        {nameRound}
      </li>
    );
  });

  return (
    <div className="Header">
      <div className="Header__wrapper">
        <img
          className="Header__logo"
          src="/src/assets/images/logo.svg"
          alt="Logo"
        />
        <h3>Score: {props.score}</h3>
      </div>

      <ul className="Header__rounds">{listRounds}</ul>
    </div>
  );
};

export default Header;
