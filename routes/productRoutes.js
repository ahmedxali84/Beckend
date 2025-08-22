const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public route to get products
router.get('/', getAllProducts);

// Protected route to create product (optional, admin use)
router.post('/', authMiddleware, createProduct);

module.exports = router;
