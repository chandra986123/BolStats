import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="he">
      <div className="container question">
        <div>
          <br></br>
        </div>
        <div className="question-title">
          <h4>{title}</h4>
          <button className="question-icon" onClick={handleClick}>
            {showAnswer ? (
              <AiOutlineMinus color="#2463e9" />
            ) : (
              <AiOutlinePlus color="#1f93ff" />
            )}
          </button>
        </div>
        <div className="question-answer">
          {showAnswer && <p className="u-text-small">{answer}</p>}
        </div>
        <div>
          <br></br>
        </div>
      </div>

      <div>
        <br></br>
      </div>
    </div>
  );
};

export default Question;
