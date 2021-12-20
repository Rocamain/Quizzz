import { decode } from 'html-entities';
import { nanoid } from 'nanoid';

export const decoder = (data) => {
  return data.map(({ question, correct_answer, incorrect_answers }) => ({
    correct_answer: decode(correct_answer, { level: 'html5' }),
    incorrect_answers: incorrect_answers.map((answer) =>
      decode(answer, { level: 'html5' })
    ),
    question: decode(question, { level: 'html5' }),
    answer_selected: null,
  }));
};

export const formatter = (data) => {
  return data.map(({ question, correct_answer, incorrect_answers }) => {
    const questionId = nanoid();
    const correctAnswer = {
      id: nanoid(),
      answer: correct_answer,
    };
    const answersArray = [
      correctAnswer,
      ...incorrect_answers.map((answer) => ({
        id: nanoid(),
        answer: answer,
      })),
    ];

    return {
      question: { question, questionId },
      correctAnswer,
      answerSelected: null,
      answers: shuffle(answersArray),
    };
  });
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
