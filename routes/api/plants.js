const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');

// GET /api/plants/cart
router.get('/cart', plantsCtrl.cart);
// POST /api/plants/cart/items/:id
router.post('/cart/items/:id', plantsCtrl.addToCart);
//route defined on the server to listen for the AJAX request

module.exports = router;
