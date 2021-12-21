import { decoder, formatter } from '../services/utils/utils';

export const getQuestions = async (setQuestions, setIsLoaded) => {
  const res = await fetch('https://opentdb.com/api.php?amount=5');
  const data = await res.json();
  const decodedData = decoder(data.results);
  const formattedData = formatter(decodedData);
  return formattedData;
};
