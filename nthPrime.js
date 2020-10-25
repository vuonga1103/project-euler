// function nthPrime(n) {
//   let primes = [];
//   let potentialPrime = 2;

//   while (primes.length < n) {
//     if (isPrime(potentialPrime)) primes.push(potentialPrime);
//     potentialPrime++;
//   }

//   return primes[primes.length - 1];
// }

// function nthPrime(n) {
//   let place = 1;
//   let potentialPrime = 3;
//   let currentPrime = 2;

//   while (place < n) {
//     if (isPrime(potentialPrime)) {
//       place += 1;
//       currentPrime = potentialPrime;
//     }
//     potentialPrime += 2;
//   }

//   return currentPrime;
// }

// console.log(nthPrime(10001));

// function isPrime(n) {
//   // any number below 2 is not prime
//   if (n < 2) return false;

//   // a number is prime if it can only be divided by 1 and itself
//   for (let i = 2; i < n; i++) {
//     if (!(n % i)) return false;
//   }

//   return true;
// }

function nthPrime(n) {
  let potentialPrime = 2;
  let count = 0;
  let latestPrime;

  while (count < n) {
    let isPrime = true;

    for (let i = 2; i < potentialPrime; i++) {
      if (potentialPrime % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      latestPrime = potentialPrime;
      count++;
    }

    if (potentialPrime === 2) {
      potentialPrime++;
    } else {
      potentialPrime += 2;
    }
  }

  return latestPrime;
}

console.log(nthPrime(100));
// n = 3;

// start potentialPrime at 2;
// start count at 0
// have a var for latestPrime
// check that potentialPrime is a prime
// to check if potentialPrime is a prime
// initialize isPrime to true;
// loop from i = 2 to i < potentialPrime
// if potentialPrime % i === 0, then isPrime is false
// break out of loop
// if yes, then set latestPrime to potentialPrime
// increment count

// if potentialPrime is 2 increment by 1, otherwise increment by 2
