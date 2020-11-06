import React from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  const audio = new Audio();
  function onAnswerClick() {
    (audio.src = props.gotRightAnswer
      ? "/src/assets/audio/audioCorrect.mp3"
      : "/src/assets/audio/audioIncorrect.mp3"),
      audio.load();
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
  }
  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={(onAnswerClick(audio), props.onAnswerClick)}
            isMarked={!!props.isMarked[answer.id]}
            isCorrect={props.rightAnswerId === answer.id}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
