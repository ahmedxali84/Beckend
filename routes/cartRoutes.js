const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart
} = require('../controllers/cartController');

router.use(authMiddleware);

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update', updateQuantity);
router.delete('/remove', removeFromCart);

module.exports = router;
