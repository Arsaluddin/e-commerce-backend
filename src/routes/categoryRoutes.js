const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Define routes for category operations
router.get('/', categoryController.getAllCategories);
router.get('/:categoryId', categoryController.getCategoryById);

module.exports = router;
