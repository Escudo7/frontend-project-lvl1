import { getUserAnswer } from './cli.js';

const minNumber = 1;
const maxNumber = 100;
const evenAnswer = 'yes';
const oddAnswer = 'no';

const findRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => number % 2 === 0;

const startTour = (userName) => {
  const number = findRandomNumber(minNumber, maxNumber);
  console.log(number);
  const userAnswer = getUserAnswer().toLowerCase();
  console.log(`Your answer: ${userAnswer}`);

  const correctAnswer = isEven(number) ? evenAnswer : oddAnswer;
  const tourResult = correctAnswer === userAnswer;

  if (tourResult === true) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }

  return tourResult;
};

export default (userName) => {
  console.log(`Answer "${evenAnswer}" if the number is even, otherwise answer "${oddAnswer}".`);

  for (let i = 0; i < 3; i += 1) {
    const tourResult = startTour(userName);

    if (tourResult === false) {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
