import React from "react";
import "../scss/base.scss";
import Header from "./Header/Header";
import Question from "./Question/Question";
import Description from "./Description/Description";

const App = () => {
  return (
    <div>
      <Header />
      <Question />
      <div>
        <Description />
      </div>
    </div>
  );
};

export default App;
