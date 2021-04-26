import { getUserName } from './cli.js';
import evenGame from './games/even-game.js';
import calculatorGame from './games/calculator-game.js';

const tourCount = 3;

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let game;

  switch (gameName) {
    case 'even':
      game = evenGame;
      break;

    case 'calculator':
      game = calculatorGame;
      break;

    default:
      return;
  }

  const gameResult = game(tourCount);
  const finalText = gameResult === true
    ? `Congratulations, ${userName}!`
    : `Let's try again, ${userName}!`;

  console.log(finalText);
};

export default startGame;
