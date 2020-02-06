var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var array = []
  var price = Math.floor(Math.random() * 99) + 1
  var cart = new Object();
  cart.itemName{itemName: item, itemPrice: price}
  array.push(cart)
  return `<${item}> has been added to your cart.`
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
