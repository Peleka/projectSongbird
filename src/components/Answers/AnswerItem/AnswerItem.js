import React from "react";
import classes from "./AnswerItem.module.scss";

const AnswerItem = (props) => {
  let cls = [classes.AnswerItem];
  console.log("props.state", props.state);
  if (props.state) {
    cls.push(classes[props.state]);
  }

  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      <span className={classes.circle}></span>
      {props.answer.name}
    </li>
  );
};

export default AnswerItem;
