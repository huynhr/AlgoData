exports.linearSearch = function linearSearch(arr, value) {
  if (arr.length === 0) return -1;
  
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    if (currentItem === value) return i;
  } 
  return -1;
}

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const currentValue = arr[middle];
    if (currentValue === value) {
      return middle;
    } else if (currentValue > value) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

