import findRandomNumber from '../services.js';

const minNumber = 1;
const maxNumber = 60;

const isPrime = (number) => {
  if (number < 4 && number > 0) {
    return true;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const startTour = () => {
  const number = findRandomNumber(minNumber, maxNumber);

  console.log(`Question: ${number}`);

  return isPrime(number) ? 'yes' : 'no';
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  return startTour;
};
