import findRandomNumber from '../services.js';

const minNumber = 1;
const maxNumber = 10;
const progressionLength = 10;
const placeholder = '..';

const startTour = () => {
  const startNumber = findRandomNumber(minNumber, maxNumber);
  const step = findRandomNumber(minNumber, maxNumber);
  const progression = [startNumber];
  let lastNumber = startNumber;

  for (let i = 1; i < progressionLength; i += 1) {
    lastNumber += step;
    progression.push(lastNumber);
  }

  const hideElementIndex = findRandomNumber(0, progressionLength - 1);
  const hideElement = progression[hideElementIndex];

  progression[hideElementIndex] = placeholder;

  console.log(`Question: ${progression.join(' ')}`);

  return String(hideElement);
};

export default () => {
  console.log('What number is missing in the progression?');

  return startTour;
};
