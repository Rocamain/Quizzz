import React, { useState } from 'react';
import './Question.css';
import Btn from './Btn.js';

export default function QuestionCard({ data, action, count }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const question = data.question.question;

  // once the answer is selected return new styles to the buttons
  const triggerStyles = (answer) => {
    if (
      answer.id !== data.correctAnswer.id &&
      answer.id === data.answerSelected
    ) {
      return 'answer-btn incorrect';
    }
    if (answer.id === data.correctAnswer.id) {
      return 'answer-btn correct';
    }

    return 'answer-btn other';
  };

  const handleDisable = (questionId, answerId) => {
    if (!isDisabled) {
      // we set state to disable to true to avoid changing the answer
      setIsDisabled((prevState) => !prevState);
      // we use closure passing the function to let the quiz component the answer selected
      action(questionId, answerId);

      count(answerId);
    }
  };

  function deployButtons(data) {
    const allAnswers = [...data.answers];

    return (
      <div className="answers-container">
        {allAnswers.map((answer) => (
          <Btn
            value={answer.answer}
            key={answer.id}
            id={answer.id}
            type={data.answerSelected ? triggerStyles(answer) : 'answer-btn'}
            action={() => handleDisable(data.question.id, answer.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="question-card">
      <h3 className="question">{question}</h3>
      {deployButtons(data)}
      <hr
        style={{
          backgroundColor: 'grey',
          marginTop: '1rem',
          height: 1,
          marginBottom: '1rem',
          opacity: 0.5,
        }}
      />
    </div>
  );
}
