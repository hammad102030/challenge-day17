// Day 17
// ### Question 1: *Calculate the Product of Odd Numbers*
// Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.

// *Example:*
// typescript
// console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
// console.log(productOfOdds([2, 4, 6, 8])); // Output: 1

// *Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.

// ---

function productOfOdds(numbers: number[]): number {
  let oddsNum = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) oddsNum *= numbers[i];
  }
  return oddsNum;
}

console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1

// ### Question 2: *Find the Longest Word in a Sentence*
// Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.

// *Example:*
// typescript
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"

// *Hint:* Split the sentence into words, compare their lengths, and return the longest one.

function findLongestWord(sentence: string): string {
    
  let longestWord = "";
  let currentWord = "";

  for (const char of sentence) {
    if (char === " ") {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = "";

    } else {
      currentWord += char;
    }
  }
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"
console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
