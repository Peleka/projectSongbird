import React from "react";
import "./Resultpage.scss";

const Resultpage = (props) => {
  return (
    <div className="Resultpage">
      <h1>Поздравляем!</h1>
      <p>Вы прошли викторину и набрали {props.score} из 30 возможных баллов</p>
      <button className="Repeat">Попробовать еще раз!</button>
    </div>
  );
};

export default Resultpage;
