import { useState, useEffect } from 'react';

import './Quiz.css';
import Blops from '../components/Blops';
import QuestionCard from '../components/Question';
import Btn from '../components/Btn';

import { getQuestions } from '../services/trivia';

export default function Quiz() {
  const [questions, setQuestions] = useState();
  const [points, setPoints] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions((prevState) => data);
    });

    return () => {};
  }, [isGameFinished]);

  const resetAll = () => {
    setPoints(0);
    setIsGameFinished((prevState) => !prevState);
  };

  const pointsCounter = (answerSelected) => {
    return questions.map((question) => {
      return answerSelected === question.correctAnswer.id
        ? setPoints((prevState) => prevState + 1)
        : null;
    });
  };

  const deployQuestion = (questions) => {
    return questions.map((question) => (
      <QuestionCard
        data={question}
        key={question.question.id}
        action={handleSelector}
        count={pointsCounter}
      />
    ));
  };
  const isAllAnswered = () => {
    const isAnswered = (question) => {
      return question.answerSelected !== null;
    };
    return questions.every(isAnswered);
  };

  const handleSelector = (questionIdReplied, answerId) => {
    setQuestions((oldQuestions) =>
      oldQuestions.map(({ question, answerSelected, ...rest }) => {
        if (question.id === questionIdReplied) {
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
  };

  return (
    <div className="quiz-section">
      <div className="quiz-container">
        {questions !== undefined && deployQuestion(questions)}
      </div>
      {questions !== undefined && (
        <div className="quiz-results-container">
          <h2 className="quiz-results">{`You score ${points} / ${questions.length} correct answers`}</h2>
          <Btn
            action={() => resetAll()}
            value="Play again"
            type={isAllAnswered() ? 'play-again-btn' : 'play-again-btn hidden'}
          />
        </div>
      )}
      <Blops type="small" />
    </div>
  );
}
