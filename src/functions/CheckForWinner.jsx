const CheckForWinner = (board, col, row, player) => {
  const numCol = 7;
  const numRow = 6;
  let numMatches = 0;
  let matchPhrase = `claimedPlayer${player}`;
  let checkRow = row;
  let checkCol = col;

  console.log(`-------Player:${player}`);

  ///////horizontal
  console.log(`##Horizontal`);
  //check left
  console.log("Check Left");
  while (checkCol >= 0 && board[checkCol][checkRow] === matchPhrase) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkCol--;
  }

  //check right
  console.log("Check Right");
  checkCol = col + 1;
  while (checkCol < numCol && board[checkCol][checkRow] === matchPhrase) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkCol++;
  }

  if (numMatches >= 4) {
    console.log(`Winner: Player${player}`);
    return player;
  }

  ////////vertical
  console.log("##Vertical");
  numMatches = 0;
  checkCol = col;
  checkRow = row;
  //check up
  console.log("Check Up");
  while (checkRow >= 0 && board[checkCol][checkRow] === matchPhrase) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkRow--;
  }

  //check down
  console.log("Check Down");
  checkRow = row + 1;
  while (checkRow < numRow && board[checkCol][checkRow] === matchPhrase) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkRow++;
  }

  if (numMatches >= 4) {
    console.log(`Winner: Player${player}`);
    return player;
  }

  ////////positive diagonal
  console.log("##Positive Diagonal");
  numMatches = 0;
  checkCol = col;
  checkRow = row;
  //check left and down
  console.log("Check left and down");
  while (
    checkCol >= 0 &&
    checkRow < numRow &&
    board[checkCol][checkRow] === matchPhrase
  ) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkCol--;
    checkRow++;
  }

  //check right and up
  console.log("Check right and up");
  checkCol = col + 1;
  checkRow = row - 1;
  while (
    checkRow >= 0 &&
    checkCol < numCol &&
    board[checkCol][checkRow] === matchPhrase
  ) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkCol++;
    checkRow--;
  }

  if (numMatches >= 4) {
    console.log(`Winner: Player${player}`);
    return player;
  }

  ////////negative diagonal
  console.log("##Negative Diagonal");
  numMatches = 0;
  checkCol = col;
  checkRow = row;
  //check right and down
  console.log("Check right and down");
  while (
    checkCol < numCol &&
    checkRow < numRow &&
    board[checkCol][checkRow] === matchPhrase
  ) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkCol++;
    checkRow++;
  }

  //check left and up
  console.log("Check left and up");
  checkCol = col - 1;
  checkRow = row - 1;
  while (
    checkRow >= 0 &&
    checkCol >= 0 &&
    board[checkCol][checkRow] === matchPhrase
  ) {
    console.log(`Col: ${checkCol}, Row:${checkRow}`);
    numMatches++;
    checkCol--;
    checkRow--;
  }

  if (numMatches >= 4) {
    console.log(`Winner: Player${player}`);
    return player;
  }

  //check for a tie

  for (let i = 0; i < numCol; i++) {
    if (board[i][0] === "unclaimed") {
      console.log("keep playing");
      return 0;
    }
  }

  //if there is no winner and there are no additional plays available then return 4 to signify a tie
  console.log("tie");
  return 4;
};

export default CheckForWinner;
