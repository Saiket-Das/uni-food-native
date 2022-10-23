const Food = require("../models/food.model");
const Order = require("../models/order.model");

// -------> Add new order (Authorization - Customer)
exports.AddOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);

    order?.orderItems.forEach(async (item) => {
      const orderCount = await Food.findByIdAndUpdate(
        { _id: item.foodId },
        { $inc: { orderCount: 1 } }
      );
      return orderCount;
    });

    res.status(201).json({
      success: true,
      message: "New food added",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to add new food",
      error: error.message,
    });
  }
};

// -------> Get all orders
exports.getAllOrder = async (req, res, next) => {
  try {
    const orders = await Order.find({});

    res.status(201).json({
      success: true,
      message: "Get all orders",
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to get all orders",
      error: error.message,
    });
  }
};

// -------> Get order by Id
exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    res.status(201).json({
      success: true,
      message: "Get all orders",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to get all orders",
      error: error.message,
    });
  }
};
