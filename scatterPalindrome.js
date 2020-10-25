// We have to find scatter palindrome strings inside given string and return number of scatter palindrome in string. For example given string "aabb", the scatter palindromes are a, aa, aab, aabb, a, abb, b, bb, and b. Here there are 9 sub-strings that are scatter palindrome.

// write a fn that outputs ALL POSSIBLE substrings that are palindrome
// write a fn that checks if a string is a possible palindrome //will return true or false DONE!!!!!!!!



const possiblePalindrome = (str) => {
  if (str.length === 1) return true;

  const result = [];

  for (char of str) {
    const idxOfRepeatedChar = result.indexOf(char);

    if (idxOfRepeatedChar !== -1) { // if the char is in result already
      result.splice(idxOfRepeatedChar, 1)
    } else {
      result.push(char)
    }
  }

  return result.length === 0 || result.length === 1;
}

const scatterPalindrome = (str) => {
  let result = [];

  for (let i = 0; i < str.length; i++) {

    for (let j = i + 1; j <= str.length; j++) {
      let currentSubstr = str.slice(i, j)

      if (possiblePalindrome(currentSubstr)) result.push(currentSubstr)
    }
  }

  return result
}

console.log(scatterPalindrome('aabb'))
// "aabb"
// result = []

// i = 0; 
// slice from i to j 
    // j starts at i, j++
    // check if str is palindrome, if yes push into result arr
// a, aa, aab, aabb

// idx = 1
// a, ab, abb

// idx = 2
// b, bb

// idx = 3
// b

