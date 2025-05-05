import React, { useState, useEffect } from "react";
import useQuestionActions from "../ContextForQuestionGen/useQuestionActions";
import { useQuestionContext } from "../ContextForQuestionGen/QuestionGenContext";
import "./EvaluateQB.css"; // You can create this CSS file for styles

const EvaluateQB = () => {
  const { state } = useQuestionContext();
  const { questionList } = state;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const currentQuestion = questionList[currentIndex];

  const handleAnswer = (option) => {
    if (answered) return;
    setSelectedOption(option);
    setAnswered(true);

    const isCorrect =
      option === currentQuestion.correct_answer ||
      option.charAt(0) === currentQuestion.correct_answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questionList.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (!questionList || !questionList.length) {
    return <div>No questions to evaluate.</div>;
  }

  if (showResult) {
    const percentage = ((score / questionList.length) * 100).toFixed(2);

    return (
      <div className="result-container">
        <h2>Quiz Completed!</h2>
        <p>
          Total Score: {score} / {questionList.length}
        </p>
        <p>Percentage: {percentage}%</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3>
        Question {currentIndex + 1} of {questionList.length}
      </h3>
      <p className="question-text">{currentQuestion.question}</p>
      <div className="options-container">
        {currentQuestion.options.map((option, idx) => {
          const isCorrect =
            option === currentQuestion.correct_answer ||
            option.charAt(0) === currentQuestion.correct_answer;

          const isSelected = selectedOption === option;

          return (
            <button
              key={idx}
              className={`option-button ${
                answered
                  ? isCorrect
                    ? "correct"
                    : isSelected
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswer(option)}
              disabled={answered}
            >
              {option}
            </button>
          );
        })}
      </div>
      {answered && (
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default EvaluateQB;
