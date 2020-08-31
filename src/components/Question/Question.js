import React from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import '../../styles/AudioPlayer.scss'
import './Question.scss';


const Question = () => {
  const rightAnswer = true;
  return (
    <div>
      <div className="Block_question">
        <div  className="Dummy">
          {
            rightAnswer
            ? <img src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg" alt="Bird" />
            : <img src="/src/assets/images/bird.jpg" alt="Plag" />
          }
          
        </div>
        <div className="Audio">
          <div className="Answer">
            <h3>{rightAnswer ? "Ворон" : "*******"}</h3>
            <hr />
          </div>
          <AudioPlayer 
            src= "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3" 
          />

        </div>
      </div>

    </div>
  )
}

export default Question;