import { useState, useEffect } from 'react';
import { getQuestions } from '../services/trivia';
import Blops from '../components/Blops';
import './Quiz.css';
import QuestionCard from '../components/Question.js';

export default function Quiz(props) {
  const [questions, setQuestions] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getQuestions(setQuestions, setIsLoaded);

    return () => {};
  }, []);

  const deployQuestion = () => {
    return questions.map((question) => (
      <QuestionCard data={question} key={question} action={selector} />
    ));
  };

  function selector(event) {
    console.log('click', event.target);
  }

  return isLoaded ? (
    <div className="quiz">
      {/* <h1>Quiz Questions</h1>
      <Btn action={props.start} type="hero-start-btn" /> */}

      <div className="quiz-container">{deployQuestion()}</div>

      <Blops type="small" />
    </div>
  ) : (
    <div>
      <Blops type="small" />
      <h2>Loading ...</h2>
    </div>
  );
}
