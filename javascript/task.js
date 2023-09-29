var details=[
    {
        brand:"apple",
        model:"iphone 15",
        price:"60000"
    },
    {
        brand:"sumsung",
        model:"s23 ultra",
        price:"160000"
    },
    {
        brand:"vivo",
        model:"v 70 pro",
        price:"50000"
    },
    {
        brand:"motorola",
        model:"edge 60 ",
        price:"40000"
    }
];
var newdata=details.filter(function(element, index){

    //return element.brand=="motorola";
    return element.price > 50000;

});
console.log(newdata);