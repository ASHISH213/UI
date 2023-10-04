function outer(){
    var city="hyd";
    console.log(city);

    function inner(x,y){
        console.log(x+y)
        console.log("innerfunction  "+ city);

    }
    inner(10,20);

}

outer();