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
  const [getRightAnswer, setGetRightAnswer] = useState(false);
  const [currentAnswerId, setCurrentAnswerId] = useState(null);
  const [isMarked, setIsMarked] = useState({}); // инфа о текущем клике пользователя
  const [score, setScore] = useState(0); // набранные очки
  const [answerPoints, setAnswerPoints] = useState(5);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0); // индекс выбранного раунда

  const retryHandler = () => {
    console.log("Тут должна быть логика");
  };

  const onAnswerClickHandler = (answerId) => {
    if (getRightAnswer) return;
    const isMarkedClone = { ...isMarked };
    isMarkedClone[answerId] = true;
    setIsMarked(isMarkedClone);

    setCurrentAnswerId(answerId);

    if (rightAnswerId === answerId) {
      setScore(score + answerPoints);
      setGetRightAnswer(true);
    } else {
      setAnswerPoints(answerPoints - 1);
    }
  };

  console.log("Info", currentAnswerId);
  console.log("birdsData[currentRoundIndex],", birdsData[currentRoundIndex]);
  return (
    <div>
      <Header score={score} currentRoundIndex={currentRoundIndex} />
      <Question
        rightAnswer={
          rightAnswerId
            ? birdsData[currentRoundIndex].find(
                (item) => item.id === rightAnswerId
              )
            : null
        }
        currentAnswerId={currentAnswerId}
      />
      <div className="Wrapper">
        <AnswerList
          answers={birdsData[currentRoundIndex]}
          onAnswerClick={onAnswerClickHandler}
          isMarked={isMarked}
          rightAnswerId={rightAnswerId}
        />
        <Description
          selectedAnswer={
            currentAnswerId
              ? birdsData[currentRoundIndex].find(
                  (item) => item.id === currentAnswerId
                )
              : null
          }
        />
      </div>
      <Button />
      <FinishPage score={score} onRetry={retryHandler} />
    </div>
  );
};

export default App;
