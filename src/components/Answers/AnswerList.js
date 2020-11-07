import React from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  const onClickAudio = () => {
    const audio = new Audio();
    audio.src = "/src/assets/audio/audioIncorrect.mp3";
    console.log("Incorrect", audio.src);
    if (props.currentAnswerId === props.rightAnswerId) {
      audio.src = "/src/assets/audio/audioCorrect.mp3";
      console.log("correct", audio.src);
    }
    audio.play();
  };
  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            onClickAudio={onClickAudio}
            isMarked={!!props.isMarked[answer.id]}
            isCorrect={props.rightAnswerId === answer.id}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
