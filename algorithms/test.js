function test() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 10);
  console.log(4);
}

console.log(test());