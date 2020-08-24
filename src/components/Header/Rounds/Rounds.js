import React from "react";
import "./Rounds.scss";

const Rounds = () => {
  const rounds = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
  ];

  return <ul className="Rounds">{rounds.join(" ")}</ul>;
};

export default Rounds;
