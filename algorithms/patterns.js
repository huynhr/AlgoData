/*
What is the problem?
  given to strings is the second string a anagram of the first?

inputs?
  given two strings
  - always comparing the second with the first?

output?
  boolean

Plan
  compare the strings and see if they have the same letters and occurrences
  frequency counter pattern
*/

exports.validAnagram = function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  const occurrenceString1 = {};
  const occurrenceString2 = {};
  for (let letter of string1) {
    occurrenceString1[letter] = (occurrenceString1[letter] || 0) + 1;
  }
  for (let letter of string2) {
    occurrenceString2[letter] = (occurrenceString2[letter] || 0) + 1;
  }

  for (let key in occurrenceString1) {
    if (!(key in occurrenceString2)) {
      return false;
    }
    if (occurrenceString1[key] !== occurrenceString2[key]) return false;
  }
  return true;
}

/*
Given an array of ordered numbers return the number of unique times
input: an array of ordered numbers, where numbers can be negative
output: a number
Plan: have two points head and tail where head is one position ahead.
If they equal we just move the head. If the don't equal then move tail one up and replace it
with the current head value and move head up. If head is greater than the length of numbers exit and return
the position of tail
             i
[1, 2, 3, 4, 5, 3, 4, 5]
                      j
*/
exports.countUniqueValues = function countUniqueValues(numbers) {
  if (numbers.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < numbers.length) {
    const headPointer = numbers[j];
    const tailPointer = numbers[i];
    if (headPointer === tailPointer) {
      j++;
    } else if (headPointer !== tailPointer) {
      i++
      numbers[i] = headPointer;
      j++;
    }
  }
  return i + 1;
}

/*
Given an array of numbers, find the max sum of n numbers
input: array of numbers a number representing sequential addition
output: the max number
Plan: To use the sliding window pattern
sum up the sequential numbers, then move one level up and subtract the previous last value and add the new index value
[1, 2, 6, 1, 6] num = 2
- we start at index of the num
[1, 2, 6, 1, 6] ==> 1 + 2 = 3 maxSum = 3
 -  - 
[1, 2, 6, 1, 6] ==> maxSum last index 3 - 1 + 6 = 8   maxSum = 8;
    -  - 
[1, 2, 6, 1, 6] ==> maxSum last index 8 - 2 + 1 = 7   maxSum = 8;
       -  - 
[1, 2, 6, 1, 6] ==> maxSum last index 7 - 6 + 6 = 7   maxSum = 8;
          -  - 
This algorithm is a window because as it slides along the array of numbers it adjusts what values need to be inside of it.
*/
exports.maxSubarraySum = function maxSubarraySum(arr, num) {
  if (arr.length === 0 || arr.length < num) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    let currentValue = arr[i];
    tempSum = tempSum + currentValue - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

/**
 * Same Frequency Of digits
 * Given two numbers check if their frequencies equal
 * input: two numbers
 * output: true or false boolean
 * Plan: convert the numbers to strings and then add num1 to a look up object. Compare
 * num2 to num1 to make sure they equal
 */
exports.sameFrequency = function sameFrequency(num1, num2) {
  const num1String = num1 + '';
  const num2String = num2 + '';

  if (num1String.length !== num2String.length) return false;

  let lookup = {};
  for (let letter of num1String) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (let letter of num2String) {
    if (lookup[letter]) {
      lookup[letter]--;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Given arguments string or numbers, are there duplicates?
 * input: numbers or strings
 * output: true or false boolean
 * Plan: use the pointers method 
 * [1, 2, 3, 4, 5, 5, 6];
 *     -  - 
 */
exports.areThereDuplicates = function areThereDuplicates() {
  const args = [...arguments];
  let lookup = {};
  for (let item of args) {
    if (lookup[item]) {
      return true;
    } else {
      lookup[item] = (lookup[item] || 0) + 1;
    }
  }
  return false;
}

/**
 * Given a an array of sorted numbers find a pair that have an average of the target average
 * input: an array of sorted numbers and a target average number
 * output: boolean true or false
 * [1, 2, 3, 4] 2.5 => true because (2 + 3) = 5 / 2
 * [1, 3, 5, 6, 7] 1.3 => false because none
 * plan: how can I dynamically check all the values as I go?
 * [1, 3, 5, 6, 7] target = 3   => true  1 + 5
 *  -           -                
 * Plan: to have the pointers on the ends
 * Check to see if the average is higher or lower than the target average
 * if the target average is higher than we would move the left pointer up
 * if the target average is lower than we would move the right pointer down
 * [1, 2, 3, 4, 5, 6] 2.5
 *  -              - => avg(6, 1) = 3.5 > 2.5 so move right down
 * [1, 2, 3, 4, 5, 6] 2.5
 *  -           -    => avg(5, 1) = 3 > 2.5 so move right down    
 * [1, 2, 3, 4, 5, 6] 2.5
 *  -        -       => avg(4, 1) = 5 > 2.5 return true
 */
exports.averagePair = function averagePair(numbers, targetAvg) {
  if (numbers.length === 0) return false;
  let lowerBounds = 0;
  let higherBounds = numbers.length - 1;
  while (lowerBounds < higherBounds) {
    const average = (numbers[lowerBounds] + numbers[higherBounds]) / 2;
    if (average === targetAvg) {
      return true;
    } else if (average > targetAvg) {
      higherBounds--;
    } else {
      lowerBounds++;
    }
  }
  return false;
}

/**
 * Given two strings, check if letters in first string appear in letters in the second string
 * inputs: two strings
 * output: boolean true of false
 * hello AND world he hello
 * Plan: iterate through the second string and if if find a letter I'll keep count if the letters match and count down
 * if they don't match then restart the count
 */

// ' cat', 'the dog and the ca dog t'
exports.isSubsequence = function isSubsequence(string1, string2) {
  let subStringLength = 0;
  for (let i = 0; i <= string2.length; i++) {
    if (subStringLength === string1.length) return true;
    const currentLetter = string2[i];
    if (currentLetter === string1[subStringLength]) {
      subStringLength++;
    }
  }
  return false;
}

/**
 * Given an array of + integers and an integer x, return the length of a sub array where their sum 
 * is equal to or greater than x
 * input: a positive integer
 * output: a positive integer of the length of a subarray that is equal to or greater than x
 * Example:
 * [1, 4, 5, 7] 9  returns 2 (4 + 5);
 * [1, 3, 6, 9, 10, 0] 11 
 *  finds (1, 3, 6, 9 ) (6 + 9) (9 + 3) (10 + 1 [3, 6, 9])
 * plan:
 * [8, 3, 5, 1, 10, 3] 20
 * sort the array
 * [1, 3, 3, 5, 8, 10]
 *  Sort the array in desc. order
 * if the first number is greater than we return 1
 * otherwise continue adding the subarray's until the number is greater than or equal to x 
 */
exports.minSubArrayLen = function minSubArrayLen(arr, num) {
  if (arr.length === 0) return 0;
  const descArr = arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
  let currentSum = 0;
  let currentLen = 0;
  for (let i = 0; i < descArr.length; i++) {
    const currentNum = descArr[i];
    if (currentNum >= num) {
      return 1;
    }
    if (currentSum >= num) {
      return currentLen;
    }
    currentSum += currentNum;
    currentLen++;
  }
  return 0;
}

/**
 * Given a string, find the longest substring with unique characters
 * input: a string of characters
 * output: a number of the longest substring of unique characters
 * [a, b, c, c, d] 3
 * [a, b, d, e, t, e, s, e, r, r]
 * [a, b, d, e, t, e, b, s, e, r, r]
 * Plan: Keep a look up table with letter and index if occurrence
 * Continually add to the letters until I find a letter that already exists,
 * if it already exists then return the iterator back to the previous existing letter and continue
 * and also restart the look up object
 */
exports.findLongestSubstring = function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let lookup = {};
  let longest = 0 
  let tempLongest = 0;
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (lookup[currentLetter] !== undefined) {
      const newLetterIndex = lookup[currentLetter] + 1;
      const newLetter = str[newLetterIndex];
      lookup = {
        [newLetter]: newLetterIndex,
      }
      tempLongest = 1;
      i = newLetterIndex;

    } else {
      lookup[currentLetter] = i;
      tempLongest++;
      longest = Math.max(tempLongest, longest);
    }
  }
  return longest;
}