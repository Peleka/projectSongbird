import React from "react";
import './AnswerList.scss';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = () => {
  return (
      <ul className="AnswerList__block">
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
      </ul>
  )
}

export default AnswerList;