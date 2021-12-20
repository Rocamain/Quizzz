import { useState, useEffect } from 'react';

import './Quiz.css';
import Blops from '../components/Blops';
import QuestionCard from '../components/Question.js';
import { getQuestions } from '../services/trivia';

export default function Quiz() {
  const [questions, setQuestions] = useState();
  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    getQuestions(setQuestions, setIsLoaded);

    return () => {};
  }, []);

  const deployQuestion = (questions) => {
    return questions.map((question) => (
      <QuestionCard
        data={question}
        key={question.question.questionId}
        action={selector}
      />
    ));
  };

  function selector(questionIdReplied, answerId) {
    setQuestions((oldQuestions) =>
      oldQuestions.map(({ question, answerSelected, ...rest }) => {
        if (question.questionId === questionIdReplied) {
          return {
            question,
            answerSelected: answerId,
            ...rest,
          };
        } else {
          return { answerSelected, question, ...rest };
        }
      })
    );
  }
  console.log('Quiz render');
  return (
    <div className="quiz-section">
      <div className="quiz-container">
        {isLoaded && deployQuestion(questions)}
      </div>
      <Blops type="small" />
    </div>
  );
}
