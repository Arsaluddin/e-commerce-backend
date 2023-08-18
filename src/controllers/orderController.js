const User = require('../models/user');
const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;
    // Find user by userId and create a new order
    const user = await User.findById(userId).populate('cart.productId');
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const orderItems = user.cart.map(cartItem => ({
      product: cartItem.productId,
      quantity: cartItem.quantity
    }));

    const newOrder = new Order({
      user: userId,
      items: orderItems
    });

    await newOrder.save();

    // Clear user's cart
    user.cart = [];
    await user.save();

    res.status(201).json({ message: 'Order placed successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while placing the order.' });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    // Find user by userId and retrieve order history
    const orders = await Order.find({ user: userId }).populate('items.product');
    if (!orders) {
      return res.status(404).json({ error: 'No order history found.' });
    }
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the order history.' });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;
    // Find order by orderId and retrieve order details
    const order = await Order.findById(orderId).populate('items.product');
    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the order details.' });
  }
};
