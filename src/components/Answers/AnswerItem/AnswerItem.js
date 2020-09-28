import React from "react";
import "./AnswerItem.scss";

const AnswerItem = (props) => {
  let cls = "";
  if(props.state) {
    cls = "success"
  } else {
    cls = "error"
  }

  return (
    <li
      className={`AnswerItem ${cls}`}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      <span className="circle correct"></span>
      {props.answer.name}
    </li>
  );
};

export default AnswerItem;
