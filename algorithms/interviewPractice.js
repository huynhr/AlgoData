/**
 * There are number of lines and represented by a two integers. (1, 5) means
 * line starts at 1 and ends at 5. For example, you are given(1, 5), (7, 15), (20, 25) lines and a new line(5, 10).
 * You have to merge the lines. Output will be(1, 15), (20, 25)
 * 
 * input => an array of array of numbers and a new line
 * output => an new array of numbers with the new line merged
 * constraints? this could probably be done in linear time
 * assumptions? as long as it's already sorted as it looks to start from 1, 5 then 7 to 15 etc...
 * 
 * output = []
 * [ [1, 5], [7, 15], [20, 25] ], [5, 10]
 * 
 * at each iteration check with the compared line
 * if the current iterator end number is less than or equal to the new line start number
 * take the maximum value of the end number
 * on the next iteration
 * check if the previous value 
 */

function mergeLines(lines, newLine) {
  var combinedLines = [...lines, newLine];
  var sortedLines = combinedLines.sort((a, b) => a[0] - b[0]);

  var mergedLines = [sortedLines[0]];
  var lastSortedLine = mergedLines[mergedLines.length - 1];
  
  for (var i = 1; i < sortedLines.length; i++) {
    var currentStartNumber = sortedLines[i][0];
    var currentEndNumber = sortedLines[i][1];
    if (currentStartNumber <= lastSortedLine[1]) {
      mergedLines[mergedLines.length - 1][1] = Math.max(currentEndNumber, lastSortedLine[1]);
      lastSortedLine = mergedLines[mergedLines.length - 1];
    } else {
      mergedLines.push(sortedLines[i]);
      lastSortedLine = mergedLines[mergedLines.length - 1];
    }
  }
  return mergedLines;
}

mergeLines([[1, 5], [7, 15], [20, 25]], [6, 17]);