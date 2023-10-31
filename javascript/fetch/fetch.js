function fnGetData(){
    // var promiseObject=fetch("https://jsonplaceholder.typicode.com/users")
    // promiseObject.then().catch()

    fetch("https://jsonplaceholder.typicode.com/users").then((sucess)=>{
        return sucess.json()
    }).then((data)=>{
        var ol= document.createElement("ol")
        data.forEach((element) => {
            var li =document.createElement("li");
            li.innerText=element.name;
            ol.appendChild(li);
            
        });
        document.getElementById("body").appendChild(ol);
    })
    .catch((error)=>{

        var h2 = document.createElement("h2");
        h2.innerText="something went worng";
        h2.style.fontSize="52px";
        h2.style.color="red";
        document.getElementById("body").appendChild(h2);
    })

}