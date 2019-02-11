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

/**
 * [4, 1, 7, 10, 34, 6] min = 1
 * [4, 1, 7, 10, 34, 6] min = 1 now swap 1 and 4 after I've gone through everything
 * [1, 4, 7, 10, 34, 6] 
 * [1, 4, 6, 10, 34, 7] 
 * [1, 4, 6, 7, 34, 10] 
 * [1, 4, 6, 7, 10, 34] 
 * input: arr of unsorted integers
 * output: arr of sorted asc integers
 */
exports.selectionSort = function(arr) {
// copy the arr
  let sortedArr = [...arr];
// iterate through the arr using i 
  for (let i = 0; i < sortedArr.length; i++) {
    let minIndex = i;
    // iterate through j making j equal to i
    for (let j = i + 1; j < sortedArr.length; j++) {
      //  if the current number is smaller than min replace it
      const currentMin = sortedArr[minIndex];
      const currentNum = sortedArr[j];
      if (currentNum < currentMin) minIndex = j;
    }
    if (i !== minIndex) swap(sortedArr, minIndex, i);
  }
  return sortedArr;
}

/**
 * [4, 1, 7, 10, 34, 6] 
 * [4, 4, 7, 10, 34, 6] 
 * [1, 4, 7, 10, 34, 6]    
 * [1, 4, 7, 10, 34, 34]    
 * [1, 4, 7, 10, 10, 34]    
 * [1, 4, 7, 7, 10, 34]    
 * [1, 4, 6, 7, 10, 34]    
 * 
 * [2, 1, 9, 76, 4]
 * [2, 2, 9, 76, 4]
 * [1, 2, 9, 76, 4]
 * [1, 2, 9, 76, 76] 4
 * [1, 2, 9, 76, 76] 4
 * [1, 2, 9, 9, 76] 4
 * [1, 2, 9, 9, 76] 4
 * [1, 2, 4, 9, 76]
 * */
exports.insertionSort = function(arr) {
  let sortedArr = [...arr];
  for (let i = 1; i < sortedArr.length; i++) {
    const currentValue = sortedArr[i];
    for (var j = i - 1; j >= 0 && sortedArr[j] > currentValue; j--) {
      sortedArr[j + 1] = sortedArr[j]; 
    }
    sortedArr[j + 1] = currentValue;
  }
  return sortedArr;
}

/**
 * input: two arrays of sorted numbers
 * output: one array with all numbers sorted together
 * How to merge arr1 with arr2
 * [1, 10, 50] [2, 14, 99, 100]
 * [1 , 2, 10, 14, 50, 99, 100]
 * Plan is to iterate through the longer arr and compare which number is smaller and add it to a new array
 * 
 */

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let output = [];
  while((arr1.length + arr2.length) !== output.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      output.push(arr2[j])
      j++;
    } else if (arr1[i] === arr2[j]) {
      output.push(arr1[i]);
      i++
    } else if (arr1[i] === undefined) {
      const remaining = arr2.slice(j);
      output = output.concat(remaining);
    } else if (arr2[j] === undefined) {
      const remaining = arr1.slice(i);
      output = output.concat(remaining);
    }
  }
  return output;
}

/**
 * input: array of unsorted numbers
 * output: array of sorted numbers
 * plan: Break the arrays up into pieces recursively then construct them back together
 * */

exports.mergeSort = function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middlePoint = Math.floor((arr.length - 1)/2);
  const leftSide = arr.slice(0, middlePoint + 1);
  const rightSide = arr.slice(middlePoint + 1);

  const arrLeft = mergeSort(leftSide);
  const arrRight = mergeSort(rightSide);

  return merge(arrLeft, arrRight);
}

const randomArray = function() {
  let output = [];
  for (let i = 0; i < 1000000; i++) {
    output.push(Math.random() * 100);
  }
  return output;
}


function pivot(arr, start = 0, end = arr.length) {
  let pivotIndex = start;
  const startNumber = arr[start];
  for (let i = start + 1; i < end; i++) {
    const currentNumber = arr[i];
    if (currentNumber < startNumber) {
      // We always know what to switch because if there's a number a head of the pivot index that isn't smaller than the
      // current number then it will be swapped no matter what
      // if there all consecutive then it doesn't matter it will swap it in place
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
}
