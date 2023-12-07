const express = require('express');
const shopControllers = require('../controllers/shopcontroller');
const router= express.Router();

router.get('/',shopControllers.shop);
router.get('/item/:id',shopControllers.item_id);
router.post('/item/:id/add',shopControllers.item_id_add);
router.get('/cart',shopControllers.cart_get);
router.post('/cart',shopControllers.cart_post);

module.exports=router