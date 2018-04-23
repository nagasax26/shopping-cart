// an array with all of our cart items
var cart = [];
var totalPrice = 0;

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.

  //empty cart div
  $('.cart-list').empty();

  //using our built in template
  var source = document.getElementById('cart-template').innerHTML;
  var template = Handlebars.compile(source);
  $('.cart-list').append(template({carts:cart}));

  //same as the above but without the handelbars package
  // for(var i=0; i<cart.length; i++){
  //   $('.cart-list').append('<div>'+cart[i].name+' - $'+cart[i].price+'</div>');
  // }

  //update total
  $('.total').text(totalPrice);
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);

  //when we add new item we add it to total price
  totalPrice+= item.price;
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  totalPrice = 0;
  
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var name = $(this).closest('div.card.item').data().name;
  var price = $(this).closest('div.card.item').data().price;
  
  var item = {name: name, price: price};
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
