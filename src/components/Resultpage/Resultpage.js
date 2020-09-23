import React from "react";
import "./ResultPage.scss";

const ResultPage = (props) => {

  return (
    <div className="ResultPage">
      <h1>Поздравляем!</h1>
      <p>Вы прошли викторину и набрали {props.score} из 30 возможных баллов</p>
      <button onClick={props.onRetry} className="Repeat">Попробовать еще раз!</button>
    </div>
  );
}

export default ResultPage;
