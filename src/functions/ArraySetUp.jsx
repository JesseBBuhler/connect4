const ArraySetUp = () => {
  const numCol = 7;
  const numRow = 6;
  const claimed = Array(numCol)
    .fill()
    .map(() => Array(numRow).fill("unclaimed"));
  return claimed;
};

export default ArraySetUp;
