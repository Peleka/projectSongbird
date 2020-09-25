import React from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        <AnswerItem key={index} answer={answer} />;
      })}
    </ul>
  );
};

export default AnswerList;
