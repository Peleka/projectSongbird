import React from "react";
import "./AnswerItem.scss";

const AnswerItem = (props) => {
  const markedClass = props.isCorrect ? "correct" : "incorrect";
  const className = `circle ${props.isMarked ? markedClass : ""}`;
  return (
    <li className="AnswerItem" onClick={() => props.onClick(props.answer.id)}>
      <span className={className}></span>
      {props.answer.name}
    </li>
  );
};

export default AnswerItem;
