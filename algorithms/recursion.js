function power(base, expo) {
  if (expo === 0) {
    return 1;
  }
  return base * power(base, --expo);
}


function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) {
    return 1;
  }
  return num * factorial(--num);
}

function productOfArray(arr) {
  let total = 1;
  function addNumbers(numbers) {
    if (numbers.length === 0) {
      return;
    }
    total *= numbers[0];
    return total + addNumbers(numbers.slice(1));
  }
  addNumbers(arr);
  return total;
}

function recursiveRange(x) {
  let total = 0;
  function addToX(num) {
    if (num > x) {
      return x;
    }
    total += num;
    addToX(num + 1);
  }
  addToX(0);
  return total;
}

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/**
 * input is a string
 * output is a the reverse of that string
 * goal is to recursively reverse the string
 * the relationship between the input and out put is that they're the reverse
 * plan is to turn the string into an array, recursively travel down the array of letters
 * once we reach the end return the letter 
 */
exports.reverse = function reverse(str) {
  const letters = str.split('');
  let reverseString = '';
  function reverseRecursion(arr) {
    if (arr.length === 0) {
      return;
    }
    const currentLetter = arr[0];
    reverseRecursion(arr.splice(1));
    reverseString = reverseString + currentLetter;
  }
  reverseRecursion(letters);
  return reverseString; 
}
