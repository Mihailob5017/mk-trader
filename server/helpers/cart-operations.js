const getUpadatedCart = (cartItems, newItem) => [...cartItems, newItem];

const removeFromCart = (cartItems, itemId) => {
  const itemLocation = cartItems.indexOf(itemId);
  let newItems = cartItems;
  newItems.splice(itemLocation, 1);
  return newItems;
};




const checkIfInCart = (userParam, item) => {
  if (Array.isArray(userParam)) {
    const allCartItems = userParam.flatMap(user => user.cartItems);
    return allCartItems.includes(item);
  }

  return userParam.cartItems.includes(item);
};

module.exports.checkIfInCart = checkIfInCart;
module.exports.removeFromCart = removeFromCart;
module.exports.getUpadatedCart = getUpadatedCart;
