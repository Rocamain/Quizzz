import React from 'react';
import './Question.css';
import Btn from './Btn.js';

export default function QuestionCard({ data, action }) {
  const question = data.question.question;

  function triggerStyles(answer) {
    if (
      answer.id !== data.correctAnswer.id &&
      answer.id === data.answerSelected
    ) {
      return 'answer-btn-incorrect-selected';
    }
    if (answer.id === data.correctAnswer.id) {
      return 'answer-btn-correct';
    }

    return 'answer-btn-incorrect';
  }

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
            action={() =>
              action(
                data.question.questionId,
                answer.id,
                data.question.question
              )
            }
          />
        ))}
      </div>
    );
  }

  return (
    <div className="question-card">
      <h2 className="question">{question}</h2>
      {deployButtons(data)}
      <hr
        style={{
          backgroundColor: 'grey',
          height: 1,
          marginBottom: '1rem',
          opacity: 0.5,
        }}
      />
    </div>
  );
}
