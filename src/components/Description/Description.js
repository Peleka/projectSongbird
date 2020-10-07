import React from "react";
import "./Description.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import "../../styles/AudioPlayer.scss";

const Description = (props) => {
  return (
    <div className="Description__block">
      {!props.selectedAnswer ? (
        <div>Послушайте плеер. Выберите птицу из списка</div>
      ) : (
        <div>
          <div className="Description__flex">
            <div className="Description__image">
              <img src={props.selectedAnswer.image} alt="Bird" />
            </div>
            <div>
              <div className="Description__answer">
                <h3>{props.selectedAnswer.name}</h3>
                <div className="Description__species">
                  {props.selectedAnswer.species}
                </div>
              </div>
              <AudioPlayer src={props.selectedAnswer.audio} />
            </div>
          </div>
          <p>{props.selectedAnswer.description}</p>
        </div>
      )}
    </div>
  );
};

export default Description;
