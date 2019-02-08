exports.swap = function (arr, indx1, indx2) {
  var temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}