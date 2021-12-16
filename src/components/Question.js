import React from 'react';
import './Question.css';
import Btn from './Btn.js';

export default function QuestionCard({ data, action }) {
  function organizer({ incorrect_answers, correct_answer }) {
    const allAnswers = [...incorrect_answers, correct_answer];

    return (
      <div className="answers-container">
        {allAnswers.map((answer) => (
          <Btn value={answer} type="answer-btn" key={answer} action={action} />
        ))}
      </div>
    );
  }

  return (
    <div className="question-card">
      <h2 className="question">{data.question}</h2>
      {organizer(data)}
    </div>
  );
}
