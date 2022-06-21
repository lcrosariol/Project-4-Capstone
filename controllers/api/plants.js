const Plant = require('../../models/plant');


module.exports = {
  cart,
  addToCart,
};

// A cart is the unpaid plant for a user (cart is now a list of plants)
// i changed the cart to a list when i decided to make a planning app instead 
// of a virtual farmstand and forgot to refactor the wording. 
async function cart(req, res) {
  const cart = await Plant.getCart(req.user._id);
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...
  res.json(cart);
}

// Add an item to the cart(adds plant to list)
async function addToCart(req, res) {
  const cart = await Plant.getCart(req.user._id);
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}
