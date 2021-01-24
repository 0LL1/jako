import type { DifferenceNumbers } from "./types";

export const reduced = (arr: number[]): number =>
  arr.reduce((a = 0, c = 0): number => a + c, 0);

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
