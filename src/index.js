import { getUserAnswer, getUserName } from './cli.js';

const tourCount = 3;

const startGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  const gameTour = game();

  for (let i = 1; i <= tourCount; i += 1) {
    const correctAnswer = gameTour();
    const userAnswer = getUserAnswer().toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
