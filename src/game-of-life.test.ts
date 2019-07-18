import { GameOfLife } from './game-of-life';

test('GameOfLife is instantiated', () => {
  const gameOfLife = new GameOfLife();
  expect(gameOfLife).toBeInstanceOf(GameOfLife);
});
