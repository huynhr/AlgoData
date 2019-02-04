exports.linearSearch = function linearSearch(arr, value) {
  if (arr.length === 0) return -1;
  
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    if (currentItem === value) return i;
  } 
  return -1;
}