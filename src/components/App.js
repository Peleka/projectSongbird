import React from "react";
import "../scss/base.scss";
import Header from "./Header/Header";
import Question from "./Question/Question";
import Description from "./Description/Description";
import AnswerList from "./Answers/AnswerList";
import Button from "./Button/Button";
import ResultPage from "./ResultPage/ResultPage";

const App = () => {

  function retryHandler() {
    console.log("Тут должна быть логика");
  }

  return (
    <div>
      <Header
        score={15}
        currentQuestionIndex={2} />
      <Question />
      <div className="Wrapper">
        <AnswerList />
        <Description />
      </div>
      <Button />
      <ResultPage
        score={15}
        onRetry={retryHandler} />
    </div>
  );
}

export default App;
