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
  const [rightAnswerId, setRightAnswerId] = useState(
    Math.ceil(Math.random() * 6)
  );
  const [isMarked, setIsMarked] = useState(null); //инфа о текущем клике пользователя
  const [score, setScore] = useState(0); //набранные очки
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0); //индекс выбранного раунда

  console.log("rightAnswerId: ", rightAnswerId);

  const retryHandler = () => {
    console.log("Тут должна быть логика");
  };

  const onAnswerClickHandler = (answerId) => {
    const isMarkedClone = Object.assign({}, isMarked);
    if (answerId === rightAnswerId) {
      isMarkedClone[answerId] = "success";
      setIsMarked(isMarkedClone);
      setRightAnswerId(Math.ceil(Math.random() * 6));
    } else {
      isMarkedClone[answerId] = "error";
      setIsMarked(isMarkedClone);
    }
    console.log("answerId", answerId);
  };

  return (
    <div>
      <Header score={score} currentRoundIndex={currentRoundIndex} />
      <Question />
      <div className="Wrapper">
        <AnswerList
          answers={birdsData[currentRoundIndex]}
          onAnswerClick={onAnswerClickHandler}
          isMarked={isMarked}
        />
        <Description />
      </div>
      <Button />
      <FinishPage score={score} onRetry={retryHandler} />
    </div>
  );
};

export default App;
