const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;
    // Create a new order
    const order = new Order({ userId, products });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully.', orderId: order._id });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while placing the order.' });
  }
};

exports.getUserOrderHistory = async (req, res) => {
  try {
    const { userId } = req.user; // User ID from authentication middleware
    const orders = await Order.find({ userId });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the user order history.' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the order details.' });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the complete order history.' });
  }
};

