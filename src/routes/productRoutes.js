const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes for product operations
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.get('/category/:categoryId', productController.getProductsByCategory);

module.exports = router;
