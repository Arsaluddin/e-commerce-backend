const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/authMiddleware');
const orderController = require('../controllers/orderController');

// Define routes for order operations
router.post('/place', orderController.placeOrder);
router.get('/history', orderController.getUserOrderHistory);
router.get('/:orderId', orderController.getOrderById);
router.get('/order-history', requireAuth, orderController.getOrderHistory);

module.exports = router;
