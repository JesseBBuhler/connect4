import CheckForWinner from "./CheckForWinner";

const UpdateClaimed = (
  colIndex,
  claimed,
  player,
  setPlayer,
  setWinner,
  winner
) => {
  let rank = 5;

  while (claimed[colIndex][rank] != "unclaimed" && rank >= 0) {
    rank = rank - 1;
  }
  if (rank >= 0) {
    claimed[colIndex][rank] = "claimedPlayer" + player;
    CheckForWinner(claimed, colIndex, rank, player, setWinner);

    if (!winner) {
      player == 1 ? setPlayer(2) : setPlayer(1);
    }
  }
  return claimed;
};

export default UpdateClaimed;
