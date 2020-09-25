import React from "react";
import "./AnswerItem.scss";

const AnswerItem = (props) => {
  return (
    <li
      className="AnswerItem"
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      <span className="circle correct"></span>
      {props.answer.name}
    </li>
  );
};

export default AnswerItem;
