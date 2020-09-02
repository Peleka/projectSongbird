import React from "react";
import './AnswerList.scss';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = () => {
  return (
    <div>
      <ul className="AnswerList__block">
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
      </ul>
    </div>
  )
}

export default AnswerList;