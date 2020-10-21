import React from "react";
import "./Button.scss";

const Button = (props) => {
  const className = `Button ${props.gotRightAnswer ? "active" : ""}`;
  return (
    <button
      className={className}
      onClick={() => props.onLevelClick()}
      disabled={!props.gotRightAnswer}
    >
      {props.text}
    </button>
  );
};

export default Button;
