var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var object = {itemName: item, itemPrice: price};
  cart.push(object)
  return item + " has been added to your cart."
}

function viewCart() {
  var i;
  var item_name;
  var item_price;
  var string;
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
    item_name = cart[0].itemName;
    item_price = cart[0].itemPrice;
    string = `In your cart, you have ${item_name} at $${item_price}.`;
    return string;
  }
  else{
    item_name = cart[0].itemName
    item_price = cart[0].itemPrice;
   
    string = `In your cart, you have ${item_name} at $${item_price}`
    
  for(i=1; i<cart.length - 1; i++){
    item_name = cart[i].itemName;
    item_price = cart[i].itemPrice;
    string = string + `, ${item_name} at $${item_price}`
  }
  item_name = cart[cart.length-1].itemName;
  item_price = cart[cart.length-1].itemPrice;
  string = string + `, and ${item_name} at $${item_price}.`
  return string
    
  }
}
  
  //addToCart("bananas")
  //console.log(viewCart())
  
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
