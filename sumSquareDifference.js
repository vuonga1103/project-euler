function sumSquareDifference(n) {
  return squareOfSums(n) - sumOfSquares(n);
}
function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function squareOfSums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
}
