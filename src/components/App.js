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
  const rightAnswerId = Math.ceil(Math.random()*6)
  const [answerState, setAnswerState] = useState({}) //инфа о текущем клике пользователя
  const [score, setScore] = useState(0); //набранные очки
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0); //индекс выбранного раунда


  console.log("rightAnswerId: ", rightAnswerId)

  const retryHandler = () => {
    console.log("Тут должна быть логика");
  };

  const onAnswerClickHandler = (answerId) => {
    const answerStateClone = Object.assign({}, answerState)

    if(answerId === rightAnswerId) {
      answerStateClone[answerId] = "success"
      setAnswerState(answerStateClone)  
    } else {
      answerStateClone[answerId] = "error"
      setAnswerState(answerStateClone) 
    }
    console.log("answerId", answerId);
  };

  console.log(answerState)
  return (
    <div>
      <Header score={score} currentRoundIndex={currentRoundIndex} />
      <Question />
      <div className="Wrapper">
        <AnswerList
          answers={birdsData[currentRoundIndex]}
          onAnswerClick={onAnswerClickHandler}
          state={answerState}
        />
        <Description />
      </div>
      <Button />
      <FinishPage score={score} onRetry={retryHandler} />
    </div>
  );
};

export default App;
