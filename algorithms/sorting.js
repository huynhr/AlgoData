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
// exports.insertionSort = function(arr) {
//   let sortedArr = [...arr];
//   for (let i = 1; i < sortedArr.length; i++) {
//    for (let j = 0; j <= i; j++) {
//      const currentValue = sortedArr[i];
//      const comparedValue = sortedArr[j];
//      if (currentValue < comparedValue) {
//        sortedArr.splice(i, 1);
//        sortedArr.splice(j, 0, currentValue);
//      }
//    }
//   }
//   return sortedArr;
// }

/**
 * input: two arrays of sorted numbers
 * output: one array with all numbers sorted together
 * How to merge arr1 with arr2
 * [1, 10, 50] [2, 14, 99, 100]
 * [1 , 2, 10, 14, 50, 99, 100]
 * Plan is to iterate through the longer arr and compare which number is smaller and add it to a new array
 * 
 */
// function merge(arr1, arr2) {
//   let largerEnd = [...arr1];
//   let smallerEnd = [...arr2];
//   let outputArray = [];
//   if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
//     largerEnd = arr1;
//     smallerEnd = arr2;
//   } else if (arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
//     largerEnd = arr2;
//     smallerEnd = arr1;
//   } 
//   while(largerEnd.length !== 0) {
//     const largerEndValue = largerEnd[0];
//     const smallerEndValue = smallerEnd[0];
//     if (largerEndValue < smallerEndValue) {
//       const value = largerEnd.shift();
//       outputArray.push(value);
//     } else if (largerEndValue > smallerEndValue) {
//       const value = smallerEnd.shift();
//       outputArray.push(value);
//     } else {
//       const value = largerEnd.shift();
//       outputArray.push(value);
//     }
//   }
//   return outputArray;
// }

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

// console.log(merge([], [2, 14]));
// console.log(merge([1, 10, 50, 80, 1000], [2, 14, 50, 99, 100, 1001]));