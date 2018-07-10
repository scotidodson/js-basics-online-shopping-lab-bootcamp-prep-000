var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item.price = Math.floor(Math.random() * 100) + 1;
  var itemPrice = item.price;
  var itemName = item;
  cart = {
    itemName: `${itemName}`, 
    price: `${itemPrice}`,
  };
  cart.push(item);
  var addedItem = " has been added to your cart.";
  return itemName + addedItem;
}

function viewCart() {
  
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