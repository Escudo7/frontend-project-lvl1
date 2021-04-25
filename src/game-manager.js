import { getUserName } from './cli.js';
import evenGame from './even-game.js';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  evenGame(name);
};

export default startGame;
