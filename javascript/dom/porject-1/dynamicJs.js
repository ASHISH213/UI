var data = [
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },

  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
  {
    id: 101,
    name: "ashish",
    city: "hyd",
  },
];

function createTable() {
  var tabRef = document.createElement("table");
  var tr1 = document.createElement("tr");

  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  th1.innerText = "id";
  th2.innerText = "name";
  th3.innerText = "city";

  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);
  tabRef.appendChild(tr1);

  tabRef.width = "800px";
  tabRef.frame = "box";
  tabRef.rules = "all";
  tabRef.style.margin = "auto";
  tabRef.cellPadding = "10px";

  tr1.style.backgroundColor = "black";
  tr1.style.color = "white";

  for (let user of data) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerText=user.id;
    td2.innerText=user.name;
    td3.innerText=user.city;


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tr.align="center";

    tabRef.appendChild(tr);
  }

  var bodyRef = document.getElementsByTagName("body");
  bodyRef[0].appendChild(tabRef);
  console.log(bodyRef);
}
