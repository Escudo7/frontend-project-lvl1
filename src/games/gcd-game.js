import findRandomNumber from '../services.js';

const minNumber = 1;
const maxNumber = 15;

const calculateAnser = (number1, number2) => {
  let tmp1 = number1;
  let tmp2 = number2;

  while (tmp1 !== 0 && tmp2 !== 0) {
    if (tmp1 > tmp2) {
      tmp1 %= tmp2;
    } else {
      tmp2 %= tmp1;
    }
  }

  return tmp1 + tmp2;
};

const startTour = () => {
  const number1 = findRandomNumber(minNumber, maxNumber);
  const number2 = findRandomNumber(minNumber, maxNumber);

  console.log(`Question: ${number1} ${number2}`);

  return String(calculateAnser(number1, number2));
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');

  return startTour;
};
