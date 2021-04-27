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

  return String(calculateAnser(number1, number2, operator));
};

export default () => {
  console.log('What is the result of the expression?');

  return startTour;
};
