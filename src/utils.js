const reduced = (arr) => arr.reduce((a, c) => a + c || 0, 0);

export const calculateDifference = (
  oneTotal,
  oneToOne,
  oneToTwo,
  twoTotal,
  twoToTwo,
  twoToOne
) => {
  const oneForBoth = reduced(oneTotal) - reduced(oneToOne) - reduced(oneToTwo);
  const twoForBoth = reduced(twoTotal) - reduced(twoToTwo) - reduced(twoToOne);

  return (
    oneForBoth / 2 - twoForBoth / 2 + reduced(oneToTwo) - reduced(twoToOne)
  );
};
