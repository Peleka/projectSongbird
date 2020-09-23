import React from "react";
import "../scss/base.scss";
import Header from "./Header/Header";
import Question from "./Question/Question";
import Description from "./Description/Description";
import AnswerList from "./Answers/AnswerList";
import Button from "./Button/Button";
import Resultpage from "./Resultpage/Resultpage";

const App = () => {
  return (
    <div>
      <Header />
      <Question />
      <div className="Wrapper">
        <AnswerList />
        <Description />
      </div>
      <Button />
      <Resultpage score={15} />
    </div>
  );
};

export default App;
