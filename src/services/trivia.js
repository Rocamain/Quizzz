import { decode } from 'html-entities';
import { nanoid } from 'nanoid';

export const getQuestions = async (setQuestions, setIsLoaded) => {
  const res = await fetch('https://opentdb.com/api.php?amount=5');
  const data = await res.json();

  const formattedData = decoder(data.results);

  console.log(formattedData);

  setQuestions(formattedData);
  setIsLoaded((prevState) => !prevState);
};

function decoder(data) {
  return data.map(({ question, correct_answer, incorrect_answers }) => ({
    correct_answer: {
      id: nanoid(),
      answer: decode(correct_answer, { level: 'xml' }),
      isCorrect: false,
    },
    incorrect_answers: incorrect_answers.map((answer) => ({
      id: nanoid(),
      answer: decode(answer, { level: 'xml' }),
      isCorrect: false,
    })),
    question: decode(question, { level: 'xml' }),
    answer_selected: null,
  }));
}
