export const reduced = (arr: number[]): number =>
  arr.reduce((a: number, c: number) => a + c || 0, 0);

interface DifferenceNumbers {
  oneTotalReduced: number;
  oneToOneReduced: number;
  oneToTwoReduced: number;
  twoTotalReduced: number;
  twoToTwoReduced: number;
  twoToOneReduced: number;
}

export const calculateDifference = ({
  oneTotalReduced,
  oneToOneReduced,
  oneToTwoReduced,
  twoTotalReduced,
  twoToTwoReduced,
  twoToOneReduced,
}: DifferenceNumbers): number => {
  const oneForBoth = oneTotalReduced - oneToOneReduced - oneToTwoReduced;
  const twoForBoth = twoTotalReduced - twoToTwoReduced - twoToOneReduced;
  const difference =
    oneForBoth / 2 - twoForBoth / 2 + oneToTwoReduced - twoToOneReduced;

  return difference;
};
