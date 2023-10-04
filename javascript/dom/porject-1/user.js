function createTable(){

   var tabRef= document.createElement("table");
   var tr1 = document.createElement("tr");
   var tr2 = document.createElement("tr");
   var tr3 = document.createElement("tr");
   var tr4 = document.createElement("tr");

   var th1 = document.createElement("th");
   var th2 = document.createElement("th");
   var th3 = document.createElement("th");

   var td1 = document.createElement("td");
   var td2 = document.createElement("td");
   var td3 = document.createElement("td");
   var td4 = document.createElement("td");
   var td5 = document.createElement("td");
   var td6 = document.createElement("td");
   var td7 = document.createElement("td");
   var td8 = document.createElement("td");
   var td9 = document.createElement("td");

   tr2.appendChild(td1);
   tr2.appendChild(td2);
   tr2.appendChild(td3);

   tr3.appendChild(td4);
   tr3.appendChild(td5);
   tr3.appendChild(td6);

   tr4.appendChild(td7);
   tr4.appendChild(td8);
   tr4.appendChild(td9);





   tr1.appendChild(th1);
   tr1.appendChild(th2);
   tr1.appendChild(th3);
   
   th1.innerText="id";
   th2.innerText="name";
   th3.innerText="city";

   td1.innerText=101;
   td2.innerText="ashish raj"
   td3.innerText="hyd"

   td4.innerText=102;
   td5.innerText="ayusi sharma";
   td6.innerText="mumbai";

   td7.innerText=103;
   td8.innerText="raju";
   td9.innerText="idisha";

   tabRef.appendChild(tr1);
   tabRef.appendChild(tr2);
   tabRef.appendChild(tr3);
   tabRef.appendChild(tr4); 

   tabRef.width="800px";
   tabRef.frame="box";
   tabRef.rules ="all";
   tabRef.style.margin= "auto";
   tabRef.cellPadding ="10px";
  

   tr1.style.backgroundColor="black"
   tr1.style.color="white";

   tr2.align="center";
   tr3.align="center";
   tr4.align="center";


var bodyRef=document.getElementsByTagName("body");
bodyRef[0].appendChild(tabRef);
console.log(bodyRef);

}