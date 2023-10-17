var obj1={
    c:100,
}

var obj2={
    c:500,
}

function fn(x,y){

    console.log(x+y+this.c);

}

fn.call(obj1,10,20);
fn.call(obj2,20,30);
fn.apply(obj1,[50,50]);