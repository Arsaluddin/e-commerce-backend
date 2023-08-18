const User = require('../models/user');

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    // Find user by userId and update cart
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Check if the product is already in the cart
    const cartItem = user.cart.find(item => item.productId === productId);
    if (cartItem) {
      // Update quantity of existing item in cart
      cartItem.quantity += quantity;
    } else {
      // Add new item to cart
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.status(200).json({ message: 'Product added to cart.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the product to cart.' });
  }
};

exports.viewCart = async (req, res) => {
  try {
    const { userId } = req.params;
    // Find user by userId and retrieve cart
    const user = await User.findById(userId).populate('cart.productId');
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({ cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the cart.' });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    // Find user by userId and update cart item quantity
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const cartItem = user.cart.find(item => item.productId === productId);
    if (!cartItem) {
      return res.status(404).json({ error: 'Product not found in cart.' });
    }

    cartItem.quantity = quantity;
    await user.save();
    res.status(200).json({ message: 'Cart item updated.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the cart item.' });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    // Find user by userId and remove product from cart
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    user.cart = user.cart.filter(item => item.productId !== productId);
    await user.save();
    res.status(200).json({ message: 'Product removed from cart.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while removing the product from cart.' });
  }
};

exports.getUserCart = async (req, res) => {
    try {
      const { userId } = req.params;
      // Find user by userId and retrieve cart
      const user = await User.findById(userId).populate('cart.productId');
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      res.status(200).json({ cart: user.cart });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the cart.' });
    }
  };