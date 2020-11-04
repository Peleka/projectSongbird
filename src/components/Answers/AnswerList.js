import React from "react";
import "./AnswerList.scss";
import AnswerItem from "./AnswerItem/AnswerItem";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

const AnswerList = (props) => {
  const audio1 = "../src/assets/audio/audioCorrect.mp3";
  const audio2 = "../src/assets/audio/audioIncorrect.mp3";

  return (
    <ul className="AnswerList">
      {props.answers.map((answer, index) => {
        return (
          <div>
            <div className="AnswerList__player">
              <AudioPlayer
                src={props.rightAnswerId === answer.id ? audio1 : audio2}
              />
            </div>
            <AnswerItem
              key={index}
              answer={answer}
              onAnswerClick={props.onAnswerClick}
              isMarked={!!props.isMarked[answer.id]}
              isCorrect={props.rightAnswerId === answer.id}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default AnswerList;
