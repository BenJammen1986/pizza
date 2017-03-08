
// business logic


var totalCost;

// pizza constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// function Toppings(name, price) {
// //   this.name = name;
// //   this.price = .75;
// // }
//
// var tomatoes = {
//   name: "tomatoes",
//   price: .75;
// }
//
// var sausage = {
//   name: "sausage",
//   price: .75;
// }
//
// var pepperoni = {
//   name: "pepperoni",
//   price: .75;
// }
//
// var pineapple = {
//   name: "pineapple",
//   price: .75;
// }
//
// var cheddar = {
//   name: "cheddar",
//   price: .75;
// }

var customerPizza = new Pizza;


Pizza.prototype = {
  fullPrice: function(){
  var fullPrice=0;
    if (this.size === "extraLarge") {
    fullPrice = 14.99;
  } else if (this.size === "large") {
    fullPrice = 12.99;
  } else if (this.size === "medium") {
    fullPrice = 9.99;
  } else {
    fullPrice = 7.99;
  }
    this.toppings.forEach(function(topping) {
    fullPrice += .75;
    }
    return fullPrice;
  }
};
