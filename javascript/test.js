
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumelator, currentvalue) {
  console.log("acumlator"+accumelator);
  console.log("currentvalue"+currentvalue);
  return accumelator + currentvalue;
},2);

console.log(sum); // 15