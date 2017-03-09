
// business logic
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
  }

// user interface logic:
$(function() {
  $("#allInfo").submit(function(event) {
    event.preventDefault();
    $("#price").show();

    var inputSize = $("input:radio[name=pizzaSize]").val();
    var customerPizza = new Pizza(inputSize);

    $("input:checkbox[name=pizzaToppings]:checked").map(function(){
      customerPizza.toppings.push($(this).val());
    });

    customerPizza.fullPrice();
    $("#orderDetails").append("<li><b>Size: </b>" + customerPizza.size + "</li>");
    $("#orderDetails").append("<li><b>Price: </b>" + customerPizza.price + "</li>");
    $("#orderDetails").append("<li><b>Toppings: </b>" + customerPizza.toppings + "</li>");
  })
});
