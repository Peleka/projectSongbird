import React, { useCallback, useEffect } from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  const { currentAnswerId, isMarked, rightAnswerId } = props;
  const audio = new Audio();

  useEffect(() => {
    if (currentAnswerId !== null) {
      audio.src = "/src/assets/audio/audioIncorrect.mp3";
      if (isMarked[rightAnswerId]) {
        audio.src = "/src/assets/audio/audioCorrect.mp3";
      }
      audio.play();
    }
  }, [isMarked]);

  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            isMarked={!!props.isMarked[answer.id]}
            isCorrect={props.rightAnswerId === answer.id}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
