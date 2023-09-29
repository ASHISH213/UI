
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(element, index) {
  return element + index;
});

console.log(sum); // 15