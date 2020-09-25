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
  const [score, setScore] = useState(0);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  function retryHandler() {
    console.log("Тут должна быть логика");
  }

  console.log(birdsData[currentRoundIndex]);
  return (
    <div>
      <Header score={score} currentRoundIndex={birdsData[currentRoundIndex]} />
      <Question />
      <div className="Wrapper">
        <AnswerList answers={birdsData[0]} />
        <Description />
      </div>
      <Button />
      <FinishPage score={score} onRetry={retryHandler} />
    </div>
  );
};

export default App;
