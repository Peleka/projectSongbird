import React from "react";
import "./AnswerItem.scss";

const AnswerItem = (props) => {
  let className = "AnswerItem";
  if (props.isMarked) {
    className = `AnswerItem ${props.isMarked}`;
  }

  return (
    <li
      className={className}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      <span className="circle"></span>
      {props.answer.name}
    </li>
  );
};

export default AnswerItem;
