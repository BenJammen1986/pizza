
// business logic

// pizza constructor

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.fullPrice = function() {
    var Price=0;
    if (this.size === "extraLarge") {
    Price = 14.99;
  } else if (this.size === "Large") {
    Price = 12.99;
  } else if (this.size === "Medium") {
    Price = 9.99;
  } else {
    Price = 7.99;
  }
    this.toppings.forEach(function(topping) {
    Price += .75;
    })
    return Price;
}

// user interface logic:

$(function() {
  $("#allInfo").submit(function(event) {
    debugger;
    var allToppings = [];
    event.preventDefault();
    $("#price").show();
// All input fields
    var inputSize = $("input[name=pizzaSize]").val();
    $("input:checkbox[name=pizzaToppings]:checked").map(function(){
      allToppings = ($(this).val());
    })
// Object creation
    var customerPizza = new Pizza(inputSize,allToppings);
// Output field
    // $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
    $("#orderDetails").append("<li><b>Size:</b>" + customerPizza.size + "</li>");
    // $("orderDetails").append.forEach("")
    $("#orderDetails").append("<li><b>Price:</b>") + customerPizza.fullPrice + "</li>"

  });
});
