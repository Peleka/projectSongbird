import React from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";
import { ProgressPlugin } from "webpack";

const AnswerList = (props) => {
  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => (
        <AnswerItem answer={answer} />
      ))}
      {/* <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem /> */}
    </ul>
  );
};

export default AnswerList;
