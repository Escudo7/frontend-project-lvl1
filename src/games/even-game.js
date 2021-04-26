import { getUserAnswer } from '../cli.js';
import findRandomNumber from '../services.js';

const minNumber = 1;
const maxNumber = 100;
const evenAnswer = 'yes';
const oddAnswer = 'no';

const isEven = (number) => number % 2 === 0;

const startTour = () => {
  const number = findRandomNumber(minNumber, maxNumber);
  console.log(number);
  const userAnswer = getUserAnswer().toLowerCase();

  const correctAnswer = isEven(number) ? evenAnswer : oddAnswer;
  const tourResult = correctAnswer === userAnswer;

  if (tourResult === true) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return tourResult;
};

export default (tourCount) => {
  console.log(`Answer "${evenAnswer}" if the number is even, otherwise answer "${oddAnswer}".`);

  for (let i = 1; i <= tourCount; i += 1) {
    const tourResult = startTour();

    if (tourResult === false) {
      return false;
    }
  }

  return true;
};
