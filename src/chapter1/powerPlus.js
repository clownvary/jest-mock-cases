function isFloat(a) {
  return a % 1 !== 0;
}
const powerPlus = (a, b) => {
  if (isFloat(a) || isFloat(b)) {
    const result = (a + b).toFixed(2);
    return Number(result);
  }
  return a + b;
};

export default powerPlus;
