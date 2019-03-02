var cart;

function setCart(newCart) {
  cart = newCart;
  return(cart);
}

function getCart() {
  return(cart);
}


function addToCart(item) {

  var s = (item);

  var obj = Math.floor(Math.random() * 101);

  cart.push({itemName: item, itemPrice: obj});

  console.log(s + " has been added to your cart.");

  return(cart);

}






function viewCart() {

  var string1 = "In your cart, you have ";

    if (cart.length < 1){
      string1 = "Your shopping cart is empty";
    }
    else if (cart.length > 0){
      for(var i=0; i < cart.length; i++){
        if(i === 0){
          string1 += cart[i].itemName + " at $" + cart[i].itemPrice;
        }
        else if (i > 0 && i < cart.length - 1){
          string1 += ", " + cart[i].itemName + " at $" + cart[i].itemPrice;
        }
        else {
          string1 += ", and " + cart[i].itemName + " at $" + cart[i].itemPrice;
        }
      }
    }

  string1 += ".";

  return(string1);

}


function total() {

  var totalCost = 0;

  for(var i=0; i < cart.length; i++){
    console.log(cart[i].itemPrice);
  }

  console.log(totalCost);

  return(totalCost);
}


function removeFromCart(item){

  var x = 0;

  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item) {
      cart.splice(i,1);
      x++;
    }
  }

  if (x == 0){
    console.log("That item is not in your cart.");
  }

  getCart();
}


function placeOrder(credit){

  if(credit === null || credit === ''){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else if(isNaN(credit)) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log("Your total cost is $" + totalCost + ", which will be charged to the card " + credit + ".")
  }

  var newCart = [];

  setCart(newCart);
  getCart();

}
