function changeH2Content() {
  //get the reference of h2 element

  var h2Ref = document.getElementById("titel");

  //step2- change the content to h2

  h2Ref.innerText = "manipulated by java script";
}

function changePargraph() {
  var pref = document.getElementById("paragraph");
 var button= document.getElementById("mybutton");
 button.innerHTML="clicked";

  pref.innerText = "change by java script dynamicaly";
}
