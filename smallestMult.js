// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

// function smallestMult(n) {
//   let arrDenominators = [];
//   for (let i = 1; i <= n; i++) arrDenominators.push(i);

//   let possibleNominator = n;
//   while (true) {
//     if (arrDenominators.every((num) => possibleNominator % num === 0))
//       return possibleNominator;
//     possibleNominator++;
//   }
// }

// console.log(smallestMult(20)); // should return 60
