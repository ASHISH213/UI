class Product {
  brandName = "Apple";
  modelname = "macbook";
  price = 250000;
  rating = 5;

  display() {
    console.log(this.brandName, this.price);
  }
  changPrice(newPrice) {
    this.price = newPrice;
    this.display();
  }
}

var product1 = new Product();
var product2 = new Product();

product1.display();
product2.display();
console.log("--------------------------------------------------------");
product2.modelname = "sumsung";
product2.price = 200000;

product1.changPrice(500000000);

// console.log(product1);
// console.log(product2);
