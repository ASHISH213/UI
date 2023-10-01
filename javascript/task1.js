//print even number between 1 to 100

function printEven(num) {
  var x = 1;

  while (x <= num){
    
    if(x%2===0){
        console.log(x);

    }
    x++;
  }
}

printEven(100);
