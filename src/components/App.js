import React, { useState } from "react";
import "../scss/base.scss";
import Header from "./Header/Header";
import Question from "./Question/Question";
import Description from "./Description/Description";
import AnswerList from "./Answers/AnswerList";
import Button from "./Button/Button";
import FinishPage from "./FinishPage/FinishPage";
import birdsData from "../Data/BirdsData";

const App = () => {
  const [score, setScore] = useState(0); //набранные очки
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0); //индекс выбранного раунда

  const retryHandler = () => {
    console.log("Тут должна быть логика");
  };

  return (
    <div>
      <Header score={score} currentRoundIndex={currentRoundIndex} />
      <Question />
      <div className="Wrapper">
        <AnswerList answers={birdsData[currentRoundIndex]} />
        <Description />
      </div>
      <Button />
      <FinishPage score={score} onRetry={retryHandler} />
    </div>
  );
};

export default App;
