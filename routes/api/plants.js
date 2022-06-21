const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');

// GET /api/plants/list
router.get('/list', plantsCtrl.list);
// POST /api/plants/list/items/:id
router.post('/list/items/:id', plantsCtrl.addToList);
//route defined on the server to listen for the AJAX request

module.exports = router;
