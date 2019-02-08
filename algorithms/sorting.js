const {
  swap,
} = require('../helpers');

/**
 * [4, 1, 7, 10, 34, 6]
 * [1, 4, 7, 10, 6, 34]
 * [1, 4, 7, 6, 10, 34]
 * [1, 4, 6, 7, 10, 34]
 */
exports.bubbleSort = function(arr) {
  let sortedArray = [...arr];
  for (let i = sortedArray.length - 1; i >= 0 ; i--) {
    // we can stop before the end because there's nothing else to iterate through
    for (let j = 0; j < i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1);
      }
    }
  }
  return sortedArray;
}
