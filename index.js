var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var array = [];
  var itemvar = item;
  var price = Math.floor(Math.random() * 99) + 1;
  var cart = {itemName: item, price: price};
  array.push(cart)
  return `<${itemvar}> has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
