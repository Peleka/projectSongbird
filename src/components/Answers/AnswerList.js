import React from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  const audio = new Audio();

  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={
              ((audio.src =
                props.rightAnswerId !== answer.id
                  ? "/src/assets/audio/audioIncorrect.mp3"
                  : "/src/assets/audio/audioCorrect.mp3"),
              audio.play(),
              props.onAnswerClick)
            }
            isMarked={!!props.isMarked[answer.id]}
            isCorrect={props.rightAnswerId === answer.id}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
