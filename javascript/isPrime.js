function checkPrime(num) {
  var isprime = true;
  if (num < 1) {
    console.log("enter positive number");
  } else if (num === 1) {
    console.log("1 is not a prime number");
  }
   else {
    for (var x = 2; x < num; x++) {
      if (num % x == 0) {
        isprime = false;
        break;
      }
    }
    if(isprime){
        console.log( " nember "+ num + " is prime");
    }
    else{
        console.log("number is not prime");
    }
  }
}

checkPrime(60);
