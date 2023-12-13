export const checkWinner = (
  gameState: string[],
  setWinner: React.Dispatch<React.SetStateAction<string>>,
): void => {
  if (
    gameState[0] === gameState[1] &&
    gameState[0] === gameState[2] &&
    gameState[0] !== 'Empty'
  ) {
    setWinner(`${gameState[0]}`);
  }
  if (
    gameState[3] !== 'Empty' &&
    gameState[3] === gameState[4] &&
    gameState[3] === gameState[5]
  ) {
    setWinner(`${gameState[3]}`);
  }
  if (
    gameState[6] !== 'Empty' &&
    gameState[6] === gameState[7] &&
    gameState[6] === gameState[8]
  ) {
    setWinner(`${gameState[6]}`);
  }
  if (
    gameState[0] !== 'Empty' &&
    gameState[0] === gameState[3] &&
    gameState[0] === gameState[6]
  ) {
    setWinner(`${gameState[0]}`);
  }
  if (
    gameState[1] !== 'Empty' &&
    gameState[1] === gameState[4] &&
    gameState[1] === gameState[7]
  ) {
    setWinner(`${gameState[1]}`);
  }
  if (
    gameState[2] !== 'Empty' &&
    gameState[2] === gameState[5] &&
    gameState[2] === gameState[8]
  ) {
    setWinner(`${gameState[2]}`);
  }
  if (
    gameState[0] !== 'Empty' &&
    gameState[0] === gameState[4] &&
    gameState[0] === gameState[8]
  ) {
    setWinner(`${gameState[0]}`);
  }
  if (
    gameState[2] !== 'Empty' &&
    gameState[2] === gameState[4] &&
    gameState[2] === gameState[6]
  ) {
    setWinner(`${gameState[2]}`);
  }
};
