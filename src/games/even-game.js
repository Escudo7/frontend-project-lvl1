import findRandomNumber from '../services.js';

const minNumber = 1;
const maxNumber = 100;
const evenAnswer = 'yes';
const oddAnswer = 'no';

const isEven = (number) => number % 2 === 0;

const startTour = () => {
  const number = findRandomNumber(minNumber, maxNumber);
  console.log(number);

  return isEven(number) ? evenAnswer : oddAnswer;
};

export default () => {
  console.log(`Answer "${evenAnswer}" if the number is even, otherwise answer "${oddAnswer}".`);

  return startTour;
};
