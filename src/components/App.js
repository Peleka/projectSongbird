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
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [currentAnswerId, setCurrentAnswerId] = useState(null);
  const [isMarked, setIsMarked] = useState({}); // инфа о текущем клике пользователя
  const [score, setScore] = useState(0); // набранные очки
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0); // индекс выбранного раунда

  function setToDefaultProps() {
    setRightAnswerId(Math.ceil(Math.random() * 6));
    setIsMarked({});
    setCurrentAnswerId(null);
    setAttemptsCount(0);
  }

  const retryHandler = () => {
    setCurrentRoundIndex(0);
    setToDefaultProps();
    setScore(0);
  };

  const gotRightAnswer = isMarked[rightAnswerId];
  const isFinished = currentRoundIndex === birdsData.length;

  const onAnswerClickHandler = (answerId) => {
    setCurrentAnswerId(answerId);
    if (gotRightAnswer !== true) {
      const isMarkedClone = { ...isMarked };
      isMarkedClone[answerId] = true;
      setIsMarked(isMarkedClone);

      setAttemptsCount(attemptsCount + 1);

      if (rightAnswerId === answerId) {
        setScore(score + (5 - attemptsCount));
      }
    }
  };

  const onNextLevelClickHandler = () => {
    if (!isFinished) {
      setCurrentRoundIndex((prevRound) => prevRound + 1);
      setToDefaultProps();
    }
  };

  return (
    <div>
      <Header score={score} currentRoundIndex={currentRoundIndex} />
      {!isFinished ? (
        <div>
          <Question
            rightAnswer={
              rightAnswerId
                ? birdsData[currentRoundIndex].find(
                    (item) => item.id === rightAnswerId
                  )
                : null
            }
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
          <Button
            text="NEXT LEVEL"
            gotRightAnswer={gotRightAnswer}
            onLevelClick={onNextLevelClickHandler}
          />
        </div>
      ) : (
        <FinishPage score={score} onRetry={retryHandler} />
      )}
    </div>
  );
};

export default App;
