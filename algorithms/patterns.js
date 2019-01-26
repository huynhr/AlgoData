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