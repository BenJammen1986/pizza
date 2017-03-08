
// business logic

// pizza constructor
function Pizza(size) {
  this.size = size;
  this.toppings=[];
  this.price = 0;
}

Pizza.prototype.fullPrice = function() {
  if (this.size === "extraLarge") {
    this.price = 14.99;
    } else if (this.size === "Large") {
    this.price = 12.99;
    } else if (this.size === "Medium") {
    this.price = 9.99;
    } else {
    this.price = 7.99;
    }
  // this.toppings.forEach(function(topping) {
  //   this.price += .75;
  // });
}

// user interface logic:

$(function() {
  $("#allInfo").submit(function(event) {
    // var allToppings = [];
    event.preventDefault();
    // var price = 0;
    $("#price").show();
// All input fields

    var inputSize = $("input[name=pizzaSize]").val();
    var customerPizza = new Pizza(inputSize);

    $("input:checkbox[name=pizzaToppings]:checked").map(function(){
      customerPizza.toppings.push($(this).val());
      console.log(customerPizza.toppings);
    });
// Object creation

    customerPizza.fullPrice();
// Output field
    console.log(customerPizza.toppings[0]);
    $("#orderDetails").append("<li><b>Size: </b>" + customerPizza.size + "</li>");
    $("#orderDetails").append("<li><b>Price: </b>" + customerPizza.price + "</li>");
    $("#orderDetails").append("<li><b>Toppings: </b>" + customerPizza.toppings + "</li>");
  })
});
