export const getPercent = (n1, n2) => {
  const max = n1 + n2;
  const percent = Math.round((n1 * 100) / max);

  return percent;
};
