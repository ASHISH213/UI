function add(x,y){
    console.log(x+y);
}

function print(){
    console.log("ghjknknnjbjkb");
}

function fn(f){
console.log(f);
f()
}
fn(function(){
    var city="delhi";
    console.log(city);
})
console.log("=========================================")
fn(print);
console.log("=========================================")
fn(add)