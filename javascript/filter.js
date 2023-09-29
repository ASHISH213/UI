var arr=[101,102,103,104,105];
console.log(arr);
var filteredarray=arr.filter(function(element){
    //element geterthan 102
    return element>102;

});
console.log(filteredarray);