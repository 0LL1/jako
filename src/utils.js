export const reduced = (arr) => arr.reduce((a, c) => a + c || 0, 0);

export const calculateDifference = ({
  oneTotalReduced,
  oneToOneReduced,
  oneToTwoReduced,
  twoTotalReduced,
  twoToTwoReduced,
  twoToOneReduced,
}) => {
  const oneForBoth = oneTotalReduced - oneToOneReduced - oneToTwoReduced;
  const twoForBoth = twoTotalReduced - twoToTwoReduced - twoToOneReduced;
  const difference =
    oneForBoth / 2 - twoForBoth / 2 + oneToTwoReduced - twoToOneReduced;

  return difference;
};
