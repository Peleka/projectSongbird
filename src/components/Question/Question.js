import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import "./Question.scss";
import "../../styles/AudioPlayer.scss";

const Question = (props) => {
  console.log("rightAnswer", props.rightAnswer);
  return (
    <div>
      <div className="Question__block">
        <div className="Question__dummyImage">
          {props.rightAnswer ? (
            <img src={props.rightAnswer.image} alt="Bird" />
          ) : (
            <img src="/src/assets/images/bird.jpg" alt="Plag" />
          )}
        </div>
        <div className="Question__dummyAnswer">
          <h3>{props.rightAnswer ? props.rightAnswer.name : "*******"}</h3>
          {props.rightAnswer ? (
            <AudioPlayer src={props.rightAnswer.audio} />
          ) : (
            <AudioPlayer src={props.rightAnswerPlayer.audio} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
