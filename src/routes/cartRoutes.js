const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');

// Define routes for cart operations
// router.get('/', cartController.getUserCart);
router.get('/view-cart/:userId', cartController.getUserCart);
router.post('/add', cartController.addToCart);
router.put('/update/:productId', cartController.updateCartItem);
router.delete('/remove/:productId', cartController.removeFromCart);
router.get('/view-cart', requireAuth, cartController.viewCart);

module.exports = router;
