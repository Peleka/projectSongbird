import React from "react";
import "./AnswerItem.scss";

const AnswerItem = (props) => {
  const audio = new Audio();
  const audioUrl = props.isCorrect
    ? "../src/assets/audio/audioCorrect.mp3"
    : "../src/assets/audio/audioIncorrect.mp3";
  const markedClass = props.isCorrect ? "correct" : "incorrect";

  const className = `circle ${props.isMarked ? markedClass : ""}`;
  return (
    <li
      className="AnswerItem"
      onClick={() => {
        audio.src = audioUrl;
        audio.play();
        props.onAnswerClick(props.answer.id);
      }}
    >
      <span className={className}></span>
      {props.answer.name}
    </li>
  );
};

export default AnswerItem;
