// Problem: Multiples of 3 and 5
// If we list all of the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


// Find all multiples of 3 or 5 that are below 1000
// Add them up

const sumMultiplesThreeAndFive = () => {
  
  let sum = 0;

  for (let i = 3; i < 1000; i++) {
    if (i % 3 || i % 5) sum += i
  }

  return sum
}

console.log(sumMultiplesThreeAndFive())