var obj1={
    id:101,
    name:"ashish",
    city:"hyd"
}

var obj2={
    ...obj1,
}


var arr1=[101,"priya","hyd"];

var arr2=[...arr1,"odisha"];

console.log(obj2);
console.log(arr2);