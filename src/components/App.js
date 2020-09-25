import React from "react";
import "../scss/base.scss";
import Header from "./Header/Header";
import Question from "./Question/Question";
import Description from "./Description/Description";
import AnswerList from "./Answers/AnswerList";
import Button from "./Button/Button";
import FinishPage from "./FinishPage/FinishPage";
import birdsData from "../Data/BirdsData";

console.log(birdsData);

const App = () => {
  const state = {
    score: 0,
    currentQuestionIndex: 0,
  };

  const retryHandler = () => {
    console.log("Тут должна быть логика");
  };

  return (
    <div>
      <Header
        score={state.score}
        currentQuestionIndex={state.currentQuestionIndex}
      />
      <Question />
      <div className="Wrapper">
        <AnswerList 
          
        />
        <Description />
      </div>
      <Button />
      <FinishPage score={state.score} onRetry={retryHandler} />
    </div>
  );
};

export default App;
