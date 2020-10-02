import React from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            isMarked={!!props.isMarked[answer.id]}
            isCorrect={props.rightAnswerId === answer.id}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
