// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

// largestPalindromeProduct(2) should return a number.
// largestPalindromeProduct(2) should return 9009.
// largestPalindromeProduct(3) should return 906609.

// we have an outer loop that starts from 99 and end at 10; num = 10 ^given num - 1
//   we have an inner loop that starts from 99 and ends at 10 Math.ceil(num / 10)
//   for every outer number we multiply by the inner number 99 * 99, 99 * 98, etc.,
//     if the product is a palindrome, we return the palindrom

// Helper fn to checks if a num is a palindrome
function isPalindrome(num) {
  let arrNum = num.toString().split("");

  while (arrNum.length) {
    if (arrNum[0] === arrNum[arrNum.length - 1]) {
      arrNum = arrNum.slice(1, arrNum.length - 1);
    } else {
      return false;
    }
  }

  return true;
}

function largestPalindromeProduct(n) {
  let largestNDigitNum = Math.pow(10, n) - 1;
  let smallestNDigitNum = Math.ceil(largestNDigitNum / 10);
  let result = 0;

  // for (let i = largestNDigitNum; i >= smallestNDigitNum; i--) {
  //   for (let j = largestNDigitNum; j >= smallestNDigitNum; j--) {
  //     let product = i * j;
  //     if (isPalindrome(product) && product > result) result = product;
  //   }
  // }

  for (let i = smallestNDigitNum; i <= largestNDigitNum - 1; i++) {
    for (let j = smallestNDigitNum + 1; j <= largestNDigitNum; j++) {
      let product = i * j;
      if (isPalindrome(product) && product > result) result = product;
    }
  }

  return result;
}

console.log(largestPalindromeProduct(4));
