import CheckForWinner from "./CheckForWinner";

const UpdateClaimed = (colIndex, claimed, player, setPlayer, setWinner) => {
  let rank = 5;

  while (claimed[colIndex][rank] != "unclaimed" && rank >= 0) {
    rank = rank - 1;
  }
  if (rank >= 0) {
    claimed[colIndex][rank] = "claimedPlayer" + player;
    CheckForWinner(claimed, colIndex, rank, setWinner, player);
    player == 1 ? setPlayer(2) : setPlayer(1);
  }
  return claimed;
};

export default UpdateClaimed;
