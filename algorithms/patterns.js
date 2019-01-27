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
exports.maxSubArraySum = function maxSubArraySum(arr, num) {
  if (arr.length === 0) return null;
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
