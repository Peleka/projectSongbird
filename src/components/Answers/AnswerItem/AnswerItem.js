import React from "react";
import "./AnswerItem.scss";

const AnswerItem = (props) => {
  return (
    <li className="AnswerItem">
      <span className="circle correct"></span>
      {props.answer.name}
    </li>
  );
};

export default AnswerItem;
