import React from "react";
import "./FinishPage.scss";

const FinishPage = (props) => {
  return (
    <div className="FinishPage">
      <h1>Поздравляем!</h1>
      {props.score < 30 ? (
        <div>
          <p>
            Вы прошли викторину и набрали {props.score} из 30 возможных баллов
          </p>
          <button onClick={props.onRetry} className="Repeat">
            Попробовать еще раз!
          </button>
        </div>
      ) : (
        <p>Вы набрали максимальное количество баллов!</p>
      )}
    </div>
  );
};

export default FinishPage;
