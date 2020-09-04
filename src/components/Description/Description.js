import React from "react";
import './Description.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import '../../styles/AudioPlayer.scss';

const Description = () => {
  const chooseBird = false
  return (
    <div className="Description__block">
      { chooseBird 
      ? <div>
          Послушайте плеер. Выберите птицу из списка
        </div>
      : 
      <div>
        <div className="Description__flex">
          <div className="Description__image">
            <img src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg" alt="Ворон" /> 
          </div>
          <div>
            <div className="Description__answer">
              <h3>Ворон</h3>
              <div className="Description__species">
                Corvus corax
              </div>
            </div>
            <AudioPlayer 
              src= "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3" 
            />
          </div>
        </div>
        <p>
          Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.
        </p>
      </div>
      }
    </div>
  )
}

export default Description;