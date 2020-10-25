// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

// Helper fn that takes in a prime and returns the next prime ex. nextPrime(2) // => 3
const nextPrime = (prime) => {
  let possiblePrime = prime + 1;

  while (true) {
    if (isPrime(possiblePrime)) return possiblePrime;
    possiblePrime++;
  }
};

// Helper fn that checks if num is prime or not
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

function largestPrimeFactor(number) {
  // Initialize currentPrime to be the first prime number
  let currentPrime = 2;
  let potentialLargestPrimeFactor;

  // Checking prime numbers from currentPrime to number
  while (currentPrime <= number) {
    // If the currentPrime divides evenly into number, it is the potential largest prime factor
    if (number % currentPrime === 0) {
      // The next number is current number / currentPrime
      number = number / currentPrime;
      potentialLargestPrimeFactor = currentPrime;
    }

    // Check the next prime number in line
    currentPrime = nextPrime(currentPrime);
  }

  return potentialLargestPrimeFactor;
}
