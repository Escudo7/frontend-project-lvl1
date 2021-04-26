import { getUserAnswer } from '../cli.js';
import findRandomNumber from '../services.js';

const minNumber = 1;
const maxNumber = 100;
const operatorList = ['+', '-', '*'];

const calculateAnser = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      return null;
  }
};

const startTour = () => {
  const number1 = findRandomNumber(minNumber, maxNumber);
  const number2 = findRandomNumber(minNumber, maxNumber);
  const operatorIndex = findRandomNumber(0, operatorList.length);
  const operator = operatorList[operatorIndex];

  console.log(`Question: ${number1} ${operator} ${number2}`);
  const userAnswer = getUserAnswer().toLowerCase();

  const correctAnswer = String(calculateAnser(number1, number2, operator));
  const tourResult = correctAnswer === userAnswer;

  if (tourResult === true) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return tourResult;
};

export default (tourCount) => {
  console.log('What is the result of the expression?');

  for (let i = 1; i <= tourCount; i += 1) {
    const tourResult = startTour();

    if (tourResult === false) {
      return false;
    }
  }

  return true;
};
