
// business logic


var totalCost;

// pizza constructor
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

function Toppings(name, price) {
  this.name = name;
  this.price = .75;
}

var tomatoes = {
  name: "tomatoes",
  price: .75;
}

var sausage = {
  name: "sausage",
  price: .75;
}

var pepperoni = {
  name: "pepperoni",
  price: .75;
}

var pineapple = {
  name: "pineapple",
  price: .75;
}

var cheddar = {
  name: "cheddar",
  price: .75;
}

var customerPizza = new Pizza;



Pizza.prototype.fullPrice = function() {
  this.toppings.forEach(function(topping) {
    this.price += .75;
  } if this.size === "extraLarge" {
    this.price += 14.99;
  } if else this.size === "large" {
    this.price += 12.99;
  } if else this.size === "medium" {
    this.price += 9.99;
  } else {
    this.price += 7.99;
  })
};
