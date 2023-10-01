var decimal=10;
var binary="";

while (decimal > 0) {
    if (decimal & 1) {
       binary = "1" + binary;
    } else {
       binary = "0" + binary;
    }
    console.log(decimal);
    console.log(binary);
    decimal = decimal >> 1;
 }

 console.log(binary);