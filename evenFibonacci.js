function fiboEvenSum(n) {
  let previous = 1;
  let current = 2;
  let sum = 0;

  while (current <= n) {
    if (current % 2 === 0) sum += current;
    let temp = current;
    current += previous;
    previous = temp;
  }

  return sum;
}

console.log(fiboEvenSum(34));

// have a var called previous, initialized to 1
// have a var called current, initialized to 2;
// have a var called sum, initialized to 0;

// while current is less than n
// if the current is an even number, add to sum
// temp = current
// current = temp + previous
// previous = temp

// 1, 2
// 1 is previous
// 2 is current
// 2 is even, so 2 gets addded to sum (sum right now will be 2)

// temp = 2
// current = 2 + 1 = 3
// previous = 2
