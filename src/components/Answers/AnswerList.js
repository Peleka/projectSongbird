import React, { useCallback, useEffect } from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  const onClickAudio = (answerId) => {
    const audio = new Audio();
    audio.src = "/src/assets/audio/audioCorrect.mp3";
    if (answerId !== props.rightAnswerId) {
      audio.src = "/src/assets/audio/audioIncorrect.mp3";
    }
    audio.play();
    props.onAnswerClick(answerId);
  };

  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onClick={onClickAudio}
            isMarked={!!props.isMarked[answer.id]}
            isCorrect={props.rightAnswerId === answer.id}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
