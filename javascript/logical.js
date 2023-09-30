var details=[
    {
        brand:"apple",
        price:50000,
        model:"iphone"
    },
    {
        brand:"sumsung",
        price:60000,
        model:"galexy"
    },
    {
        brand:"vivo",
        price:70000,
        model:"v70"
    },
    {
        brand:"apple",
        price:150000,
        model:"iphone 15 pro"
    }
];
var filtereddata=details.filter(function(element){
    
   return element.brand=="apple" || element.brand=="sumsung" ;

})
console.log(filtereddata);

var data= details.filter(function(element){

    return (element.brand=="apple" || element.brand=="sumsung") && element.price >= 70000;

})
console.log(data);