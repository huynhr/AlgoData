const {
  swap,
} = require('../helpers');

/**
 * [4, 1, 7, 10, 34, 6]
 * [1, 4, 7, 10, 6, 34]
 * [1, 4, 7, 6, 10, 34]
 * [1, 4, 6, 7, 10, 34]
 * for optimizations we can use a variable and check each time we iterate
 * if we meet a condition then we know there was a change so continue
 * however if there are no further changes the boolean is never triggered and we break from our algorithm
 */
exports.bubbleSort = function(arr) {
  let sortedArray = [...arr];
  let swapped = false;
  for (let i = sortedArray.length - 1; i >= 0 ; i--) {
    // we can stop before the end because there's nothing else to iterate through
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return sortedArray;
}
