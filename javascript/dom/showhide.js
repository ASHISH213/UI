function showhide(){

    var inputRef=document.querySelector("#password");
    var btnRef=document.getElementById("btn");
    if(inputRef.type==="password"){
    inputRef.type="text";
    btnRef.innerText="hide password"
    }
    else{
        inputRef.type="password";
    btnRef.innerText="show password"
    }

}